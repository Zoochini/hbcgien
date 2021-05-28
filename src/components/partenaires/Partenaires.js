import React, { Component } from "react";
import Partenaire from "./Partenaire";
import Layout from "../Layout";
import "../../scss/module/partenaires.scss";

export class Partenaires extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partenaires: [],
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URI}partenaires`, {
      method: "GET",
      headers: new Headers(),
    })
      .then((res) => res.json())
      .then((res) => this.setState({ partenaires: res }));
  }

  render() {
    let { partenaires } = this.state;
    return (
      <Layout className="partenaires">
        {/** Partenaires régions */}
        <div className="row justify-content-center">
          {partenaires.map((v) => {
            return (
              <Partenaire
                className="col-lg-4 col my-2 text-center partenaire"
                name={v.name}
                link={v.url}
                src={`data:${v.image.contentType};base64, ${v.image.data}`}
              />
            );
          })}
        </div>
      </Layout>
    );
  }
}

export default Partenaires;
