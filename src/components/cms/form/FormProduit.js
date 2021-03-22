import React, { Component } from "react";
import FormField from "./FormField";
import { dataURLtoFile } from "./utility";
import FormSubmitButton from "./FormSubmitButton";
import { accessToken } from "../../../utils";
export class FormProduit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nom: "",
      prixBase: "",
      prixClub: "",
      image: null,
      response: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.postProduit = this.sendEquipe.bind(this);
  }

  handleChange(e) {
    let element = e.target;
    switch (element.name) {
      case "nom":
        this.setState({ nom: element.value });
        break;
      case "prixBase":
        this.setState({ prixBase: element.value });
        break;
      case "prixClub":
        this.setState({ prixClub: element.value });
        break;
      case "image":
        this.setState({ image: element.files[0] });
        break;
      default:
        break;
    }
  }

  sendEquipe() {
    let { nom, prixBase, prixClub, image } = this.state;
    let { schema, id } = this.props;
    let formData = new FormData();

    formData.append("nom", nom);
    formData.append("prixBase", prixBase);
    formData.append("prixClub", prixClub);
    formData.append("image", image);

    let headers = new Headers({ Authorization: accessToken() });

    fetch(`${process.env.REACT_APP_API_URI}${schema}?id=${id}`, {
      method: id !== undefined ? "PUT" : "POST",
      headers: headers,
      body: formData,
    }).then(
      (res) =>
        this.setState({
          response: res._message !== undefined ? "Success !" : res._message,
        }),
      (err) =>
        this.setState({ response: "Upload Error please verifiy connection" })
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
            nom: res.nom,
            prixBase: res.prixBase,
            prixClub: res.prixClub,
            image: dataURLtoFile(
              `data:${res.image.contentType};base64,${res.image.data}`,
              "image"
            ),
          });
        });
  }

  render() {
    let { state } = this;
    return (
      <div className="form-row justify-content-between">
        <FormField
          name="nom"
          label="Nom"
          value={state.nom}
          onChange={this.handleChange}
        />
        <FormField
          name="prixBase"
          label="Prix de base"
          value={state.prixBase}
          onChange={this.handleChange}
        />
        <FormField
          name="prixClub"
          label="Prix club"
          value={state.prixClub}
          onChange={this.handleChange}
        />
        <FormField
          name="image"
          label="Image"
          value={state.image}
          onChange={this.handleChange}
        />
        <FormSubmitButton response={state.response} onClick={this.sendEquipe} />
      </div>
    );
  }
}

export default FormProduit;
