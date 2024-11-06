import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <h1 className="text-center text-xl underline">Login</h1>
      <div className="h-screen flex flex-col justify-center items-center">
        <Form actionType="login" btnName="Connexion" />
        <p className="my-2">
          Pas encore de compte ?{" "}
          <Link to="/signup" className="underline">
            Inscrivez vous
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
