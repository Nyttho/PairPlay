const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const cookieOptions = {
  httpOnly: true, //js can't reach cookie client side
  secure: true,
  maxAge: 24 * 60 * 60 * 1000, // 24h lifetime
};

exports.signup = (req, res, next) => {
  //hash user password with a salt of 10
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        username: req.body.username,
        password: hash,
      });
      // create user in database
      user
        .save()
        .then(() => res.status(201).json({ message: "User Created" })) // Message explicite en cas de succès
        .catch((error) => {
          res.status(400).json({ error: error.message }); // Renvoie l'erreur complète
        });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

exports.login = (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ message: "incorrect pair username/password" });
      }

      // Comparaison du mot de passe
      bcrypt
        .compare(password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ message: "incorrect pair username/password" });
          }

          // Génère le token
          const token = jwt.sign(
            { userId: user._id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "24h" }
          );

          // Définit le cookie avec le token
          const cookieOptions = {
            httpOnly: true, // Rend le cookie inaccessible par JavaScript
            secure: false,
            maxAge: 24 * 60 * 60 * 1000, // Durée de vie de 24 heures
          };

          res.cookie("token", token, cookieOptions); // Définit le cookie

          // Envoie la réponse JSON
          res.status(200).json({
            userId: user._id,
            message: "Connexion réussie !",
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
