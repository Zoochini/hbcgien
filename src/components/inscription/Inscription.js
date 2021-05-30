import React, { Component } from "react";
import DownloadLink from "../DownloadLink";
import "../../scss/module/inscriptions.scss";

export class Inscription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inscriptions: [],
    };
  }

  componentDidMount() {
    let { REACT_APP_API_URI } = process.env;
    fetch(`${REACT_APP_API_URI}inscriptions`)
      .then((res) => res.json())
      .then(
        (res) => this.setState({ inscriptions: res }),
        (err) => console.log(err)
      );
  }

  render() {
    let { inscriptions } = this.state;
    return (
      <div className="row">
        <div className="col">
          <h3>Document(s)</h3>
          {inscriptions.map((inscription) => {
            return <DownloadLink value={inscription} />;
          })}
        </div>
      </div>
    );
  }
}

export default Inscription;
