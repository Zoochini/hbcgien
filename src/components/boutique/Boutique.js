import React, { Component } from "react";
import "../../scss/module/boutique.scss";
import DownloadLink from "../DownloadLink";

export class Boutique extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produits: [],
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URI}produits`)
      .then((res) => res.json())
      .then(
        (res) => this.setState({ produits: res }),
        (err) => console.log("Error : " + err)
      );
  }

  render() {
    let { produits } = this.state;
    return (
      <div className="row">
        <div className="col">
          {produits.map((produit) => {
            return <DownloadLink value={produit} />;
          })}
        </div>
      </div>
    );
  }
}

export default Boutique;
