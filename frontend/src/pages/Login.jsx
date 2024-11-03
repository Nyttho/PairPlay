import React from "react";
import Form from "../components/Form";

const Login = () => {
  return (
    <div>
      <h1 className="text-center text-xl underline">Login</h1>
      <Form actionType="login" btnName="Connexion" />
    </div>
  );
};

export default Login;
