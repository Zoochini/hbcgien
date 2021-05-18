import React, { Component } from "react";
import FormField from "./FormField";
import FormFieldJoditEditor from "./FormFieldJoditEditor";
import FormSubmitButton from "./FormSubmitButton";
import { accessToken } from "../../../utils";

export class FormPage extends Component {
  constructor(props) {
    super(props);

    this.content = React.createRef();

    this.state = {
      title: "",
      content: "",
      index: "",
      response: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendPage = this.sendPage.bind(this);
    this.fetchPage = this.fetchPage.bind(this);
    this.getIndex = this.getIndex.bind(this);
  }

  handleChange(e) {
    let element = e.target;
    switch (element.name) {
      case "title":
        this.setState({ title: element.value });
        break;
      case "index":
        this.setState({ index: element.value });
        break;
      default:
        this.setState({ content: element.innerHTML });
        break;
    }
  }

  sendPage() {
    let { title, content, index } = this.state;
    let { schema, id } = this.props;

    let jsonToPost = {
      title: title,
      content: content,
      index: index,
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
    ).then(
      (res) =>
        this.setState({
          response: res._message !== undefined ? "Success !" : res._message,
        }),
      (err) =>
        this.setState({ response: "Upload Error please verifiy connection" })
    );
  }

  fetchPage() {
    let { schema, id } = this.props;
    if (id !== undefined)
      fetch(`${process.env.REACT_APP_API_URI}${schema}?id=${id}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            title: res.title,
            content: res.content,
            index: res.index,
          });
        });
  }

  getIndex() {
    switch (this.props.index) {
      case "club":
        return process.env.REACT_APP_CLUB_ID;
      case "infos":
        return process.env.REACT_APP_INFOS_ID;
      case "arbitrage":
        return process.env.REACT_APP_ARBITRAGE_ID;
      default:
        return "";
    }
  }

  componentDidMount() {
    this.setState({ index: this.getIndex() });
    this.fetchPage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchPage();
    }
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
        <FormSubmitButton response={state.response} onClick={this.sendPage} />
      </div>
    );
  }
}

export default FormPage;
