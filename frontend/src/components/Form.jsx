import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LockIcon from "./LockIcon";
import UserIcon from "./UserIcon";

const Form = ({ actionType, btnName }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier que les champs ne sont pas vides
    if (!username || !password) {
      console.error("Le nom d'utilisateur ou le mot de passe est vide.");
      return;
    }

    console.log(username, password);
    const response = await fetch(
      `http://localhost:4000/api/auth/${actionType}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      }
    );

    if (response.ok) {
      const data = await response.json();
      navigate("/dashboard");
    } else {
      const error = await response.json();
      console.error("Erreur de connexion :", error);
    }
  };

  return (
    <div className="w-1/3">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col relative">
            <UserIcon />
            <input
              className="py-4 pl-12 bg-slate-300/[0.6] placeholder-white outline-none focus:bg-slate-200 focus:placeholder-slate-800 transition-all duration-600"
              type="text"
              placeholder="username"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col relative">
            <LockIcon />
            <input
              className="py-4 pl-12 bg-slate-300/[0.6] placeholder-white outline-none focus:bg-slate-200 focus:placeholder-slate-800 transition-all duration-600"
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>
        </div>
        <div className="mt-7 w-full">
          <button
            className="bg-slate-400/90 text-white rounded-full p-3 block mx-auto uppercase text-lg hover:bg-blue-500 w-full hover:bg-slate-300/80"
            type="submit"
          >
            {btnName}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
