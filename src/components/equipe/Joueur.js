import React, { Component } from "react";

export class Joueur extends Component {
  render() {
    let { value } = this.props;
    return (
      <div className="joueur col-lg">
        <span className="nom">{value.nom}</span>
        <span className="prenom">{value.prenom}</span>
      </div>
    );
  }
}

export default Joueur;
