import React, { Component, Fragment } from "react";
import marked from "marked";
import parse from "html-react-parser";
import Layout from "../Layout";
import FacebookPage from "./FacebookPage";
import News from "./News";
import "../../scss/module/accueil.scss";
import Carousel from "./Carousel";

export class Accueil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    fetch(
      `${process.env.REACT_APP_API_URI}pages?id=${process.env.REACT_APP_ACCUEIL_ID}`
    )
      .then((res) => res.json())
      .then(
        (res) => (res !== null ? this.setState({ content: res.content }) : ""),
        (err) => console.log("Error : " + err)
      );
  }

  render() {
    return (
      <Layout className="accueil">
        <div className="row justify-content-center">
          {parse(marked(this.state.content))}
        </div>
        <div className="row">
          <News />
          <Carousel />
          <FacebookPage />
        </div>
      </Layout>
    );
  }
}

export default Accueil;
