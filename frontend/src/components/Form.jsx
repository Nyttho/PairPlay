import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ actionType, btnName }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:4000/api/auth/${actionType}`,
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
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
    <div className="max-width-md mx-auto">
      <form
        className="border-black border-2 p-5 w-full divide-y-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white rounded-md px-2 py-1"
          type="submit"
        >
          {btnName}
        </button>
      </form>
    </div>
  );
};

export default Form;
