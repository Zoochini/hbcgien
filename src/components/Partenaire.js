import React, { Component } from "react";

export class Partenaire extends Component {
  render() {
    let { name, link, src } = this.props;
    return (
      <div className="col-lg-4 text-center">
        <div className="thumbnail">
          <a href={link} alt={name}>
            <img
              className="img-responsive"
              src={src}
              alt={name}
            ></img>
          </a>
        </div>
      </div>
    );
  }
}

export default Partenaire;
