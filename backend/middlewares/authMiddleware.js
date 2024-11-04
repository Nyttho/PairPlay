const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  // Récupère le token du cookie
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Accès non autorisé" });
  }

  try {
    // Vérifie le token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = decodedToken.userId; // Ajoute l'ID de l'utilisateur à la requête pour l'utiliser dans les routes protégées
    next(); // Passe au middleware ou route suivant
  } catch (error) {
    res.status(401).json({ message: "Token invalide ou expiré" });
  }
}

module.exports = authMiddleware;
