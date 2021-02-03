import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "../../scss/module/menu.scss";

function Menu(props) {
  return (
    <nav id="menu">
      <Logo className="nav-item" />
      <Link to="/" className="nav-item">
        Accueil
      </Link>
      <Dropdown value="DropdownTest">
        <Link to="/" className="nav-item">
          Test
        </Link>
        <Link to="/bbb" className="nav-item">
          Blabla
        </Link>
        <Link to="/ccc" className="nav-item">
          HELLO WORLD
        </Link>
      </Dropdown>
    </nav>
  );
}

export default Menu;
