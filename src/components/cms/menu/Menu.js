import React, { Component } from "react";
import Navbar from "./Navbar";

export class Menu extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <nav className="navbar align-items-start">
          <Navbar />
        </nav>
      </div>
    );
  }
}

export default Menu;
