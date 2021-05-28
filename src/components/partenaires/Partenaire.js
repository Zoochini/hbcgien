import React, { Component } from "react";

export class Partenaire extends Component {
  render() {
    let { className, name, link, src } = this.props;
    return (
      <div className={className}>
        <a href={link} alt={name} target="_blank" rel="noreferrer">
          <img src={src} alt={name}></img>
        </a>
      </div>
    );
  }
}

export default Partenaire;
