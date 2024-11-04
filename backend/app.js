const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

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

app.use(cookieParser());

// ----------------------- cors header config ------------------

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // Remplacez par l'URL de votre frontend
  res.setHeader("Access-Control-Allow-Credentials", "true");
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

// Gérer les requêtes OPTIONS
app.options("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.sendStatus(204); // 204 No Content
});

// ----------------------------------------------

// Middleware to parse the body of JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", userRoutes);

module.exports = app;
