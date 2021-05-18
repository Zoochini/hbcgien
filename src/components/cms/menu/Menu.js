import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

function Menu() {
  //NEED TO PROPER CHANGE
  const path = "/__admin";

  const [indexs, setIndexs] = useState([]);

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
      <Link to={`${path}/produits`}>boutique</Link>
      <Link to={`${path}/contact/${process.env.REACT_APP_CONTACT_ID}`}>
        contact
      </Link>
      <Link to={`${path}/licencies`}>licencies</Link>
      <Link to={`${path}/inscriptions`}>inscriptions</Link>
    </div>
  );
}

export default Menu;
