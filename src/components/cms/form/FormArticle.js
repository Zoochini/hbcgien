import React, { Component } from "react";
import FormField from "./FormField";
import FormFieldJoditEditor from "./FormFieldJoditEditor";
import FormSubmitButton from "./FormSubmitButton";
import { accessToken } from "../../../utils";

export class FormArticle extends Component {
  constructor(props) {
    super(props);

    this.content = React.createRef();

    this.state = {
      title: "",
      content: "",
      response: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendArticle = this.sendArticle.bind(this);
  }

  handleChange(e) {
    let element = e.target;
    switch (element.name) {
      case "title":
        this.setState({ title: element.value });
        break;
      default:
        this.setState({ content: element.innerHTML });
        break;
    }
  }

  sendArticle() {
    let { title, content } = this.state;
    let { schema, id } = this.props;

    //We tell the user the upload just starting
    this.setState({ response: "pending" });

    let jsonToPost = {
      title: title,
      content: content,
    };

    let headers = new Headers({
      "Content-Type": "application/json",
      Authorization: accessToken(),
    });

    let requestOptions = {
      method: id !== undefined ? "PUT" : "POST",
      headers: headers,
      body: JSON.stringify(jsonToPost),
    };

    fetch(
      `${process.env.REACT_APP_API_URI}${schema}?id=${id}`,
      requestOptions
    ).then((res) => res.json())
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

  componentDidMount() {
    let { schema, id } = this.props;
    if (id !== undefined)
      fetch(`${process.env.REACT_APP_API_URI}${schema}?id=${id}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({ title: res.title, content: res.content });
        });
  }

  render() {
    let { state } = this;
    return (
      <div className="form-row justify-content-between">
        <FormField
          name="title"
          label="Titre"
          value={state.title}
          onChange={this.handleChange}
        />
        <FormFieldJoditEditor
          ref={this.content}
          name="content"
          label="Contenu"
          value={state.content}
          onChange={this.handleChange}
        />
        <FormSubmitButton
          response={state.response}
          onClick={this.sendArticle}
        />
      </div>
    );
  }
}

export default FormArticle;
