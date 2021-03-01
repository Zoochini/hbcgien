import React, { Component } from "react";

export class ListTableTd extends Component {
  render() {
    let { data, className } = this.props;
    return <td className={`${className}`}>{data}</td>;
  }
}

export default ListTableTd;
