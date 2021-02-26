import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavbarItem extends Component {
  render() {
    let { label, route, css } = this.props;
    return (
      <li className="nav-item">
        <Link to={route} className={"nav-link" + " " + css}>
          {label}
        </Link>
      </li>
    );
  }
}

export default NavbarItem;
