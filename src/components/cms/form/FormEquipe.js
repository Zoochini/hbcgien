import React, { Component } from "react";
import FormField from "./FormField";
import { dataURLtoFile } from "./utility";
import FormSubmitButton from "./FormSubmitButton";
import { accessToken } from "../../../utils";

export class FormEquipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: "",
      categorie: "",
      image: null,
      joueurs: [],
      response: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.deleteJoueur = this.deleteJoueur.bind(this);
    this.sendEquipe = this.sendEquipe.bind(this);
  }

  handleChange(e) {
    let element = e.target;
    switch (element.name) {
      case "label":
        this.setState({ label: element.value });
        break;
      case "categorie":
        this.setState({ categorie: element.value });
        break;
      case "image":
        this.setState({ image: element.files[0] });
        break;
      case "joueurs":
        if (this.state.joueurs.find((e) => e === element.value) !== undefined)
          break;
        let array = this.state.joueurs.slice();
        array.push(element.value);
        this.setState({
          joueurs: array,
        });
        break;
      default:
        break;
    }
    console.log(this.state);
  }

  deleteJoueur(e) {
    let array = this.state.joueurs.slice();
    array.splice(
      array.findIndex((v) => v === e.target.value),
      1
    );
    this.setState({ joueurs: array });
  }

  sendEquipe() {
    let { label, categorie, joueurs, image } = this.state;
    let { schema, id } = this.props;
    let formData = new FormData();

    formData.append("label", label);
    formData.append("categorie", categorie);
    for (let i = 0; i < joueurs.length; i++) {
      formData.append(`joueurs[${i}]`, joueurs[i]);
    }
    formData.append("image", image);

    let headers = new Headers({ Authorization: accessToken() });

    fetch(`${process.env.REACT_APP_API_URI}${schema}?id=${id}`, {
      method: id !== undefined ? "PUT" : "POST",
      headers: headers,
      body: formData,
    }).then(
      (res) => this.setState({ response: "Upload success" }),
      (err) => this.setState({ response: "Error" })
    );
  }

  componentDidMount() {
    let { schema, id } = this.props;
    if (id !== undefined)
      fetch(`${process.env.REACT_APP_API_URI}${schema}?id=${id}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          this.setState({
            label: res.label,
            categorie: res.categorie,
            image: dataURLtoFile(
              `data:${res.image.contentType};base64,${res.image.data}`,
              "image"
            ),
            joueurs: res.joueurs,
          });
        });
  }

  render() {
    let { state } = this;
    console.log(state);
    return (
      <div className="form-row justify-content-between">
        <FormField
          name="label"
          label="Label"
          value={state.label}
          onChange={this.handleChange}
        />
        <FormField
          name="categorie"
          label="Categorie"
          value={state.categorie}
          onChange={this.handleChange}
        />
        <FormField
          name="image"
          label="Image"
          value={state.image}
          onChange={this.handleChange}
        />
        <FormField
          name="joueurs"
          label="Joueurs"
          value={state.joueurs}
          onChange={this.handleChange}
          onClick={this.deleteJoueur}
        />
        <FormSubmitButton response={state.response} onClick={this.sendEquipe} />
      </div>
    );
  }
}

export default FormEquipe;
