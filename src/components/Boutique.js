import React, { Component } from "react";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";
import PDFCommande from "./PDFCommande";
import Produit from "./Produit";
import Coordonnes from "./coordonnes/Coordonnes.js";
import Menu from "./menu/Menu";

export class Boutique extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produits: [],
      commande: [],
      coordonnes: {
        nom: "",
        prenom: "",
        adresse: "",
        cp: "",
        ville: "",
        telephone: "",
        email: "",
      },
      isReady: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCoordonnes = this.handleChangeCoordonnes.bind(this);
    this.initializeCommande = this.initializeCommande.bind(this);
  }

  initializeCommande() {
    let tailles = [
      "6 ans",
      "8 ans",
      "10 ans",
      "12 ans",
      "14 ans",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL",
    ];
    /**
     * {
        _id: 0,
        nom: "Survêtement",
        tailles: tailles,
        prix: 40,
      },
      {
        _id: 1,
        nom: "Maillot",
        tailles: tailles,
        prix: 32,
      },

      {
        _id: 2,
        nom: "Doudoune",
        tailles: tailles,
        prix: 58,
      },
      {
        _id: 3,
        nom: "Short",
        tailles: tailles,
        prix: 22,
      },
     */
    let commande = [];
    let produits = [];
    fetch(`${process.env.REACT_APP_API_URI}produits`)
      .then((res) => res.json())
      .then((res) => {
        produits = res.map((v) => {
          return {
            _id: v._id,
            nom: v.nom,
            tailles: tailles,
            prixBase: v.prixBase,
            prixClub: v.prixClub,
            image: "data:" + v.image.contentType + ";base64," + v.image.data,
          };
        });
        produits.forEach((v) => {
          commande.push({
            _id: v._id,
            nom: v.nom,
            prix: v.prixClub,
            taille: "",
            quantite: 0,
          });
        });
        this.setState({ produits: produits, commande: commande });
      });
  }

  componentDidMount() {
    this.initializeCommande();
    let { isReady } = this.state;
    setTimeout(() => {
      this.setState({ isReady: !isReady });
    });
  }

  //TO OPTIMIZE
  handleChange(e) {
    let { commande, coordonnes } = this.state; // La commande à mettre à jour
    let { value, name } = e.target; // Valeur du champ à changer et nom du dit champ
    let id = e.target.parentNode.id; // Id du produit commander
    let newArray = commande.slice();
    let target = commande.find((x) => {
      return x._id === id;
    }); // Partie de la commande à modifier
    let targetIndex = commande.findIndex((x) => {
      return x._id === id;
    }); //Index de la partie de la commande à modifier
    let newValue;
    switch (name) {
      case "taille":
        newValue = { taille: value };
        break;
      case "quantite":
        newValue = { quantite: parseInt(value) };
        break;
      default:
        break;
    }
    newValue = Object.assign(target, newValue);
    newArray.splice(targetIndex, 1, newValue);
    this.setState({ commande: newArray });
  }

  handleChangeCoordonnes(e) {
    let element = e.target;
    let target = this.state.coordonnes;
    let newValue;
    switch (element.name) {
      case "nom":
        newValue = { nom: element.value };
        break;
      case "prenom":
        newValue = { prenom: element.value };
        break;
      case "adresse":
        newValue = { adresse: element.value };
        break;
      case "cp":
        newValue = { cp: element.value };
        break;
      case "ville":
        newValue = { ville: element.value };
        break;
      case "telephone":
        newValue = { telephone: element.value };
        break;
      case "email":
        newValue = { email: element.value };
        break;
    }
    newValue = Object.assign(target, newValue);
    this.setState({ coordonnes: newValue });
  }

  render() {
    let { produits, commande, coordonnes, isReady } = this.state;
    return (
      <div>
        <Menu />
        <div id="boutique">
          <div className="container my-2 py-2">
            <div className="row justify-content-around">
              {produits.map((v) => {
                return (
                  <Produit
                    produit={v}
                    commande={commande.find((x) => {
                      if (x !== undefined) return x.nom === v.nom;
                    })}
                    onChange={this.handleChange}
                  />
                );
              })}
            </div>
            <Coordonnes
              coordonnes={coordonnes}
              onChange={this.handleChangeCoordonnes}
            />
            <div className="row my-2 ml-2">
              {isReady && (
                <PDFDownloadLink
                  document={
                    <PDFCommande commande={commande} coordonnes={coordonnes} />
                  }
                  fileName="commandeHBC.pdf"
                  className="btn btn-primary"
                >
                  Bon de commande
                </PDFDownloadLink>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Boutique;
