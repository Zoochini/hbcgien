import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <nav id="menu">
      <Logo />
      <Link to="/">Accueil</Link>
    </nav>
  );
}

export default Menu;
