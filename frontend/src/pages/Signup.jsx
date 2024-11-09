import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="grow bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex flex-col justify-center items-center">
      <div className="mx-auto w-1/4">
        <Form actionType="signup" btnName="S'inscrire" />
        <p className="my-2 text-center">
          Vous avez déjà un compte ?{" "}
          <Link to="/login" className="underline">
            Connectez vous.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
