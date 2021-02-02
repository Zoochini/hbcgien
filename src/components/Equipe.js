import React, { Component } from "react";
import Joueur from "./Joueur";
import Menu from "./menu/Menu";

export class Equipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
      joueurs: [],
      image: null,
    };
    this.fetchEquipe = this.fetchEquipe.bind(this);
  }

  /** Load Equipe */
  fetchEquipe() {
    let { equipe } = this.props.match.params;
    if (equipe !== undefined)
      fetch(`${process.env.REACT_APP_API_URI}equipes?id=${equipe}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            label: res.label,
            joueurs: res.joueurs,
            image:
              "data:" + res.image.contentType + ";base64," + res.image.data,
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
    let { joueurs, image, label } = this.state;
    return (
      <div>
        <Menu />
        <div id="equipe" className="container text-center my-2">
          <h1>{label}</h1>
          <img className="" src={image} />
          <div className="row justify-content-between">
            {joueurs.map((v) => {
              return (
                <div className="col-sm-6 col-lg-3 py-2">
                  <Joueur value={v} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Equipe;
