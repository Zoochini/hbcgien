import React, { Component } from "react";
import Layout from "../Layout";
import marked from "marked";
import parse from "html-react-parser";
import "../../scss/module/equipe.scss";

export class Equipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
      image: null,
      content: "",
    };
    this.fetchEquipe = this.fetchEquipe.bind(this);
  }

  /** Fetch Equipe with id */
  fetchEquipe() {
    let { equipe } = this.props.match.params;
    if (equipe !== undefined)
      fetch(`${process.env.REACT_APP_API_URI}equipes?id=${equipe}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            label: res.label,
            image:
              "data:" + res.image.contentType + ";base64," + res.image.data,
            content: res.content !== undefined ? res.content : "",
          });
        });
  }

  componentDidMount() {
    this.fetchEquipe();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.fetchEquipe();
    }
  }

  render() {
    let { image, label, content } = this.state;
    return (
      <Layout className="equipe">
        <div className="img-card row-cols">
          <img src={image} alt="équipe"></img>
          <h1 className="label">{label}</h1>
        </div>
        <div className="row">
          <div className="col">{parse(marked(content))}</div>
        </div>
      </Layout>
    );
  }
}

export default Equipe;
