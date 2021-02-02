import React, { Component } from "react";
import Actu from "./Actu.js";

export class ActusRow extends Component {
  render() {
    const { value } = this.props;
    let actus = [];
    for (let i = 0; i < value.length; i++) {
      actus.push(<Actu value={value[i]} />);
    }
    return <div className="row my-2 py-2 justify-content-between">{actus}</div>;
  }
}

export default ActusRow;
