const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.signup = (req, res, next) => {
  const { username, password } = req.body;
  // Vérifier si le nom d'utilisateur existe déjà
  User.findOne({ username })
    .then((existingUser) => {
      if (existingUser) {
        // Si un utilisateur avec ce nom existe déjà, renvoyer une erreur
        return res
          .status(400)
          .json({ message: "Ce nom d'utilisateur est déjà pris." });
      }

      // Si le nom d'utilisateur est disponible, procéder au hachage du mot de passe
      bcrypt
        .hash(password, 10)
        .then((hash) => {
          const user = new User({
            username: username,
            password: hash,
          });

          // Enregistrer l'utilisateur dans la base de données
          user
            .save()
            .then(() => {
              res.status(201).json({ message: "Utilisateur créé avec succès" });
            })
            .catch((error) => {
              console.error(
                "Erreur lors de la sauvegarde de l'utilisateur :",
                error
              );
              res.status(500).json({ error: error.message });
            });
        })
        .catch((error) => {
          console.error("Erreur lors du hachage du mot de passe :", error);
          res.status(500).json({ message: "Erreur interne du serveur." });
        });
    })
    .catch((error) => {
      console.error("Erreur lors de la vérification de l'utilisateur :", error);
      res.status(500).json({ message: "Erreur interne du serveur." });
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

exports.checkAuth = (req, res, next) => {
  User.findById(req.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
      res
        .status(200)
        .json({ message: "Utilisateur authentifié", username: user.username });
    })
    .catch((error) => res.status(500).json({ error }));
};
