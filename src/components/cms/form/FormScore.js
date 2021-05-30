import React, { Component } from "react";
import FormField from "./FormField";
import FormSubmitButton from "./FormSubmitButton";
import { accessToken, handleUploadError } from "../../../utils";

export class FormScore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      equipe1: "",
      equipe2: "",
      score1: "",
      score2: "",
      response: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendScore = this.sendScore.bind(this);
    this.fetchScore = this.fetchScore.bind(this);
  }

  handleChange(e) {
    let element = e.target;
    switch (element.name) {
      case "equipe1":
        this.setState({ equipe1: element.value });
        break;
      case "equipe2":
        this.setState({ equipe2: element.value });
        break;
      case "score1":
        this.setState({ score1: element.value });
        break;
      case "score2":
        this.setState({ score2: element.value });
        break;
      default:
        break;
    }
  }

  sendScore() {
    let { equipe1, equipe2, score1, score2 } = this.state;
    let { schema, id } = this.props;

    //We tell the user the upload just starting
    this.setState({ response: "pending" });

    let jsonToPost = {
      equipe1: equipe1,
      equipe2: equipe2,
      score1: score1,
      score2: score2,
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

    fetch(`${process.env.REACT_APP_API_URI}${schema}?id=${id}`, requestOptions)
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

  fetchScore() {
    let { schema, id } = this.props;
    if (id !== undefined)
      fetch(`${process.env.REACT_APP_API_URI}${schema}?id=${id}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            equipe1: res.equipe1,
            equipe2: res.equipe2,
            score1: res.score1,
            score2: res.score2,
          });
        });
  }

  componentDidMount() {
    this.fetchScore();
  }

  render() {
    let { state } = this;
    return (
      <div className="form-row justify-content-between">
        <FormField
          name="equipe1"
          label="Equipe 1"
          value={state.equipe1}
          onChange={this.handleChange}
        />
        <FormField
          name="equipe2"
          label="Equipe 2"
          value={state.equipe2}
          onChange={this.handleChange}
        />
        <FormField
          name="score1"
          label="Score 1"
          value={state.score1}
          onChange={this.handleChange}
        />
        <FormField
          name="score2"
          label="Score 2"
          value={state.score2}
          onChange={this.handleChange}
        />
        <FormSubmitButton response={state.response} onClick={this.sendScore} />
      </div>
    );
  }
}

export default FormScore;
