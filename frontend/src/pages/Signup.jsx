import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <h1 className="text-center text-xl underline">Register</h1>
      <div className="h-screen flex flex-col justify-center items-center">
        <Form actionType="signup" btnName="s'inscrire" />
        <p className="my-2">
          Déjà inscrit ?{" "}
          <Link to="/login" className="underline">
            Connectez vous
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
