import React, { Component } from "react";
import ListTableTh from "./ListTableTh";

export class ListTableHeader extends Component {
  render() {
    let { data } = this.props;
    if (data === undefined) {
      return <thead></thead>;
    } else {
      return (
        <thead>
          <tr>
            {Object.keys(data).map((v) => {
              switch (v) {
                case "_id":
                case "__v":
                case "tel":
                case "image":
                case "categorie":
                case "joueurs":
                case "content":
                case "file":
                case "ref":
                  break;
                case "nom":
                  return <ListTableTh data="Nom" />;
                case "prenom":
                  return <ListTableTh data="Prenom" />;
                case "sexe":
                  return <ListTableTh data="Sexe" />;
                case "numLicence":
                  return <ListTableTh data="Licence" />;
                case "mention":
                  return <ListTableTh data="Mention" />;
                case "dateNaissance":
                  return <ListTableTh data="Date de naissance" />;
                case "email":
                  return <ListTableTh data="E-mail" />;
                case "adresse":
                  return <ListTableTh data="Adresse" />;
                case "cp":
                  return <ListTableTh data="Code Postal" />;
                case "ville":
                  return <ListTableTh data="Ville" />;
                case "offreCom":
                  return <ListTableTh data="Offre Com" />;
                case "title":
                  return <ListTableTh data="Titre" />;
                case "index":
                  return <ListTableTh data="Type" />;
                default:
                  return <ListTableTh data={v} />;
              }
            })}
            <ListTableTh />
            <ListTableTh />
          </tr>
        </thead>
      );
    }
  }
}

export default ListTableHeader;
