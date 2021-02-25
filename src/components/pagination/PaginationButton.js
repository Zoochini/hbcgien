import React, { Component } from "react";
import { Link } from "react-router-dom";

export class PaginationButton extends Component {
  render() {
    let { value, path, className } = this.props;

    return (
      <Link to={`/actus/${path}`} className={`${className}`}>
        {value}
      </Link>
    );
  }
}

export default PaginationButton;
