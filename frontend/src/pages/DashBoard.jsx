import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(""); // État pour stocker le nom d'utilisateur

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/auth/check", {
          method: "GET",
          credentials: "include", // Inclure les cookies dans la requête
        });

        if (!response.ok) {
          console.log(response.status);
          throw new Error("Non authentifié");
        }

        const data = await response.json();
        setUsername(data.username); // Stocke le nom d'utilisateur dans l'état
      } catch (error) {
        // navigate("/login"); // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
        console.log(error);
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <div>
      <h1>Bienvenue, {username} !</h1>
      {/* Affichez ici le contenu spécifique du tableau de bord */}
    </div>
  );
}

export default Dashboard;
