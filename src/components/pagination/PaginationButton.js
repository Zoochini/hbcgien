import React, { Component } from "react";
import { Link } from "react-router-dom";

export class PaginationButton extends Component {
  render() {
    let { value, path, active } = this.props;

    return (
      <li className={`page-item ${active}`} >
        <Link to={`/actus/${path}`} className="page-link">
          {value}
        </Link>
      </li>
    );
  }
}

export default PaginationButton;
