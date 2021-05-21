import React, { Component } from "react";
import FormField from "./FormField";
import FormSubmitButton from "./FormSubmitButton";
import { accessToken } from "../../../utils";

export class FormInscription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      file: null,
      response: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.postInscription = this.postInscription.bind(this);
  }

  handleChange(e) {
    let element = e.target;
    switch (element.name) {
      case "name":
        this.setState({ name: element.value });
        break;
      case "file":
        this.setState({ file: element.files[0] });
        break;
      default:
        break;
    }
  }

  postInscription() {
    let { name, file } = this.state;
    let { schema } = this.props;

    //We tell the user the upload just starting
    this.setState({ response: "pending" });

    let formData = new FormData();

    formData.append("name", name);
    formData.append("file", file);

    let headers = new Headers({ Authorization: accessToken() });

    fetch(`${process.env.REACT_APP_API_URI}${schema}`, {
      method: "POST",
      headers: headers,
      body: formData,
    }).then((res) => res.json())
    .then(
      (res) =>
        this.setState({
          response:
            res === undefined
              ? "pending"
              : res.errors !== undefined
              ? res.message
              : "success",
        }),
      (err) => this.setState({ response: "error" })
    );
  }

  render() {
    let { state } = this;
    return (
      <div className="form-row justify-content-between">
        <FormField
          name="name"
          label="Nom"
          value={state.name}
          onChange={this.handleChange}
        />
        <FormField
          name="file"
          label="Pdf d'inscription"
          value={state.file}
          onChange={this.handleChange}
        />
        <FormSubmitButton
          response={state.response}
          onClick={this.postInscription}
        />
      </div>
    );
  }
}

export default FormInscription;
