import React, { Component } from "react";
import NavbarItem from "./NavbarItem";

export class Navbar extends Component {
  render() {
    const path = "/__admin";
    return (
      <ul className="">
        <NavbarItem label="Article" route={`${path}/articles`} />
        <NavbarItem label="Inscription" route={`${path}/inscriptions`} />
        <NavbarItem label="Equipe" route={`${path}/equipes`} />
        <NavbarItem label="Licencie" route={`${path}/licencies`} />
        <NavbarItem label="Partenaire" route={`${path}/partenaires`} />
        <NavbarItem label="Produit" route={`${path}/produits`} />
      </ul>
    );
  }
}

export default Navbar;
