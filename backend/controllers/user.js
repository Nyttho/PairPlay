const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

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

exports.login = (req, res, next) => {};
