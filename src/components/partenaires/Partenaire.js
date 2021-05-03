import React, { Component } from "react";

export class Partenaire extends Component {
  render() {
    let { name, link, src } = this.props;
    return (
      <div className="col-lg-4 col my-2 text-center partenaire">
        <a href={link} alt={name} target="_blank" rel="noreferrer">
          <img src={src} alt={name}></img>
        </a>
      </div>
    );
  }
}

export default Partenaire;
