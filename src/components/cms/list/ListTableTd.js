import React, { Component } from "react";

export class ListTableTd extends Component {
  render() {
    let { data } = this.props;
    return <td>{data}</td>;
  }
}

export default ListTableTd;
