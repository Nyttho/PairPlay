import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between p-5 shadow-lg">
      <div>
        <NavLink to={"/"}>Logo</NavLink>
      </div>
      <div className="flex gap-3">
        <NavLink to="/login">Connexion</NavLink>
        <NavLink to="/register">Inscription</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
