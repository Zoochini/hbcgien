import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function Menu() {
  //NEED TO PROPER CHANGE
  const path = "/__admin";

  return (
    <div className="cms-menu">
      <Link to={`${path}/articles`}>articles</Link>
      <Link to={`${path}/inscriptions`}>inscriptions</Link>
      <Link to={`${path}/equipes`}>equipes</Link>
      <Link to={`${path}/licencies`}>licencies</Link>
      <Link to={`${path}/partenaires`}>partenaires</Link>
      <Link to={`${path}/produits`}>produits</Link>
    </div>
  );
}

export default Menu;
