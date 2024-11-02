import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between p-5 shadow-lg">
      <div>
        <span>Logo</span>
      </div>
      <div className="flex gap-3">
        <Link to="/login">Connexion</Link>
        <Link to="/signup">Inscription</Link>
      </div>
    </nav>
  );
};

export default Nav;
