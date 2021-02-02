import React, { Component } from "react";

export class Joueur extends Component {
  render() {
    let { value } = this.props;

    //TO DO -----------------------------------------------------------
    return (
      <div id="joueur">
        <span>
          {value.nom} {value.prenom}
        </span>
      </div>
    );
    //-----------------------------------------------------------------
  }
}

export default Joueur;
