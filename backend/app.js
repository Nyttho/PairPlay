const express = require("express");
const app = express();
const mongoose = require("mongoose");

//routes
const userRoutes = require("./routes/user");
const collectionRoutes = require("./routes/collection");

// --------------- mongoDB connection --------------------
const uri = process.env.MONGODB_URI;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

mongoose
  .connect(uri, clientOptions)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
// ----------------------------------------------------------

// ----------------------- cors header config ------------------

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
//----------------------------------------------

// // Middleware to parse the body of JSON requests
app.use(express.json()); // Transforms JSON data from requests into JavaScript objects accessible in req.body
app.use(express.urlencoded({ extended: true })); // Handles data of type application/x-www-form-urlencoded

app.use("/api/auth", userRoutes);

module.exports = app;
