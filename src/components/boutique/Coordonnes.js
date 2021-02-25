import React, { Component } from "react";
import CoordonnesChamp from "./CoordonnesChamp";

export class Coordonnes extends Component {
  render() {
    let { coordonnes, onChange } = this.props;
    return (
      <div id="coordonnes" className="container">
        <div className="form-group row">
          {Object.entries(coordonnes).map((v) => {
            let name = v[0];
            let label = v[0];
            let value = v[1];
            let type = "text";
            let pattern = "";
            let size = "6";
            switch (v[0]) {
              case "prenom":
                label = "Prénom";
                break;
              case "telephone":
                type = "tel";
                label = "Téléphone";
                pattern =
                  "(01|02|03|04|05|06|07|08|09)[ .-]?[0-9]{2}[ .-]?[0-9]{2}[ .-]?[0-9]{2}[ .-]?[0-9]{2}";
                break;
              case "email":
                type = "email";
                break;
              case "adresse":
                size = "12";
                break;
              case "cp":
                label = "CP";
                pattern = "([A-Z]+[A-Z]?-)?[0-9]{1,2} ?[0-9]{3}";
                break;
              default:
                break;
            }
            return (
              <CoordonnesChamp
                name={name}
                label={label}
                value={value}
                type={type}
                pattern={pattern}
                onChange={onChange}
                size={size}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Coordonnes;
