import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  //To change if you want to access the cms by another route
  const path = "/__admin";

  return (
    <div className="cms-menu">
      <Link to={`${path}/accueil/${process.env.REACT_APP_ACCUEIL_ID}`}>
        accueil
      </Link>
      <Link to={`${path}/club`}>club</Link>
      <Link to={`${path}/equipes`}>equipes</Link>
      <Link to={`${path}/infos`}>infos pratiques</Link>
      <Link to={`${path}/arbitrage`}>arbitrage</Link>
      <Link to={`${path}/articles`}>actualités</Link>
      <Link to={`${path}/partenaires`}>partenaires</Link>
      <Link to={`${path}/boutique/${process.env.REACT_APP_BOUTIQUE_ID}`}>
        boutique
      </Link>
      <Link to={`${path}/contact/${process.env.REACT_APP_CONTACT_ID}`}>
        contact
      </Link>
      <Link to={`${path}/inscriptions`}>inscriptions</Link>
      <Link to={`${path}/produits`}>produits</Link>
      <Link to={`${path}/scores/${process.env.REACT_APP_SCORE_ID}`}>
        scores
      </Link>
    </div>
  );
}

export default Menu;
