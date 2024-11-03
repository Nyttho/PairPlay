import { useState } from "react";

const Form = ({ actionType, btnName }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      window.location.href = `/dashboard?username=${username}`;
    } else {
      const error = await response.json();
      console.error("Erreur de connexion :", error);
    }
    console.log(document.cookie);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">{btnName}</button>
    </form>
  );
};

export default Form;
