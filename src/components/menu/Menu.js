import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "../../scss/module/menu.scss";
import CollapseButton from "./CollapseButton";

function Menu(props) {
  return (
    <nav id="menu">
      <div className="top">
        <CollapseButton />
        <Logo className="nav-item" />
      </div>
      <div className="bottom">
        <Link to="/" className="nav-item">
          Accueil
        </Link>
        <Dropdown value="Club">
          <Link to="/" className="nav-item">
            Historique de l'association
          </Link>
          <Link to="/bbb" className="nav-item">
            Le mot du président
          </Link>
          <Link to="/ccc" className="nav-item">
            Le conseil d'administration
          </Link>
        </Dropdown>
        <Dropdown value="Equipes"></Dropdown>
        <Dropdown value="Infos pratiques">
          <Link to="/inscription" className="nav-item">
            S'inscrire
          </Link>
          <Link to="/" className="nav-item">
            Qui contacter ?
          </Link>
          <Link to="/" className="nav-item">
            Synchroniser un calendrier
          </Link>
        </Dropdown>
        <Dropdown value="Arbitrage">
          <Link to="/" className="nav-item">
            Devenez arbitre
          </Link>
          <Link to="/" className="nav-item">
            Apprendre les gestes
          </Link>
          <Link to="/" className="nav-item">
            Les arbitres du club
          </Link>
          <Link to="/" className="nav-item">
            La vie d'arbitre
          </Link>
        </Dropdown>
        <Link to="/actus" className="nav-item">
          Actualités
        </Link>
        <Link to="/partenaires" className="nav-item">
          Partenaires
        </Link>
        <Link to="/boutique" className="nav-item">
          Boutique
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
