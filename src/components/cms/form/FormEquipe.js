import React, { Component } from "react";
import FormField from "./FormField";
import FormSubmitButton from "./FormSubmitButton";
import FormFieldJoditEditor from "./FormFieldJoditEditor";
import { accessToken, handleUploadError } from "../../../utils";

export class FormEquipe extends Component {
  constructor(props) {
    super(props);

    this.content = React.createRef();

    this.state = {
      label: "",
      categorie: "",
      image: null,
      content: "",
      response: "",
    };

    this.handleChange = this.handleChange.bind(this);
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
      case "content":
        this.setState({ content: element.innerHTML });
        break;
      default:
        this.setState({ content: element.innerHTML });
        break;
    }
  }

  sendEquipe() {
    let { label, categorie, content, image } = this.state;
    let { schema, id } = this.props;

    //We tell the user the upload just starting
    this.setState({ response: "pending" });

    let formData = new FormData();

    formData.append("label", label);
    formData.append("categorie", categorie);
    formData.append("image", image);
    formData.append("content", content);

    let headers = new Headers({ Authorization: accessToken() });

    fetch(`${process.env.REACT_APP_API_URI}${schema}?id=${id}`, {
      method: id !== undefined ? "PUT" : "POST",
      headers: headers,
      body: formData,
    })
      .then((res) => res.json())
      .then(
        (res) =>
          this.setState({
            response:
              res === undefined
                ? "pending"
                : res.errors !== undefined || res.name !== undefined
                ? handleUploadError(res.name)
                : "success",
          }),
        (err) => this.setState({ response: "error" })
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
            content: res.content,
          });
        });
  }

  render() {
    let { state } = this;
    console.log(state);
    return (
      <div>
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
        <FormFieldJoditEditor
          ref={this.content}
          name="content"
          label="Contenu"
          value={state.content}
          onChange={this.handleChange}
        />
        <FormSubmitButton response={state.response} onClick={this.sendEquipe} />
      </div>
    );
  }
}

export default FormEquipe;
