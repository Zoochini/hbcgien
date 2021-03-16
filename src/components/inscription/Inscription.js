import React, { Component, useState, useEffect } from "react";
import Layout from "../Layout";
import "../../scss/module/inscriptions.scss";
import { Redirect } from "react-router";

export class Inscription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inscriptions: [],
    };
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    let { inscriptions } = this.state;
    const id = e.target.id;
    console.log(e);
    const inscription = inscriptions.find((v) => id === v._id);
    const file =
      inscription !== undefined
        ? `data:${inscription.file.contentType};base64, ${inscription.file.data}`
        : "";
    let a = document.createElement("a");
    a.href = file;
    a.download = inscription.name;
    a.click();
  }

  render() {
    let { inscriptions } = this.state;
    console.log(inscriptions);
    return (
      <Layout className="inscriptions">
        <h1>Inscriptions</h1>
        {inscriptions.map((inscription) => {
          return (
            <a
              key={inscription._id}
              href="#"
              target="_blank"
              download={inscription.name}
              onClick={this.handleClick}
            >
              <h2 id={inscription._id}>{inscription.name}</h2>
            </a>
          );
        })}
      </Layout>
    );
  }
}

export default Inscription;
