import React, { Component } from "react";
import FormField from "./FormField";
import { dataURLtoFile } from "./utility";
import FormSubmitButton from "./FormSubmitButton";
import { accessToken } from "../../../utils";

export class FormPartenaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      url: "",
      image: null,
      response: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendPartenaire = this.sendPartenaire.bind(this);
  }

  handleChange(e) {
    let element = e.target;
    switch (element.name) {
      case "name":
        this.setState({ name: element.value });
        break;
      case "url":
        this.setState({ url: element.value });
        break;
      case "image":
        this.setState({ image: element.files[0] });
        break;
      default:
        break;
    }
  }

  sendPartenaire() {
    let { name, url, image } = this.state;
    let { schema, id } = this.props;
    let formData = new FormData();

    formData.append("name", name);
    formData.append("url", url);
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
            name: res.name,
            url: res.url,
            image: dataURLtoFile(
              `data:${res.image.contentType};base64,${res.image.data}`,
              "image"
            ),
          });
        });
  }

  render() {
    let { state } = this;
    console.log(state);
    return (
      <div className="form-row justify-content-between">
        <FormField
          name="name"
          label="Nom"
          value={state.name}
          onChange={this.handleChange}
        />
        <FormField
          name="url"
          label="Lien vers le site du partenaire"
          value={state.url}
          onChange={this.handleChange}
        />
        <FormField
          name="image"
          label="Image"
          value={state.image}
          onChange={this.handleChange}
        />
        <FormSubmitButton
          response={state.response}
          onClick={this.sendPartenaire}
        />
      </div>
    );
  }
}

export default FormPartenaire;
