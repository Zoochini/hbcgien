import React, { Component } from "react";

export class Produit extends Component {
  render() {
    let { produit, commande, onChange } = this.props;
    return (
      <div className="col-lg-3 col-6 p-2">
        <div id="produit" onChange={onChange}>
          <img src={produit.image}></img>
          <br />
          <label id={produit._id}>
            {produit.nom}
          </label>
          <br />
          <span className="prixBase">
            <s>Prix de base : {produit.prixBase} </s>
          </span>
          <label id={produit._id}>Prix club : {produit.prixClub}</label>
          <div id={produit._id} className="form-group">
            <select
              name="taille"
              className="custom-select mb-2"
              value={commande.taille}
            >
              <option value="" disabled selected>
                Choisissez une taille
              </option>
              {produit.tailles.map((v) => {
                return <option value={v}>{v}</option>;
              })}
            </select>
            <input
              name="quantite"
              type="number"
              className="form-control mb-2"
              value={commande.quantite}
              min={0}
              max={99}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Produit;
