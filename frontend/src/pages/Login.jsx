import React from "react";
import Form from "../components/Form";

const Login = () => {
  return (
    <>
      <h1 className="text-center text-xl underline">Login</h1>
      <div className="min-h-screen flex flex-col justify-center">
        <Form actionType="login" btnName="Connexion" />
      </div>
    </>
  );
};

export default Login;
