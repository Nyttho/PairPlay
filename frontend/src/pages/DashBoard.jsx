import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const username = query.get("username") || "Utilisateur"; // Récupérer le nom d'utilisateur ou utiliser un défaut

  return (
    <div>
      <h1 className="text-center text-xl underline">Bonjour, {username}!</h1>
      <p>Bienvenue sur votre tableau de bord.</p>
      {/* Ajoutez d'autres contenus de votre tableau de bord ici */}
    </div>
  );
};

export default Dashboard;
