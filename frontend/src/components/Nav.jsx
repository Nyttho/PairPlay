import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between p-5 shadow-lg">
      <div>
        <span>Logo</span>
      </div>
      <div className="flex gap-3">
        <a href="#">Connexion</a>
        <a href="#">Inscription</a>
      </div>
    </nav>
  );
};

export default Nav;
