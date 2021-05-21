import React, { Component } from "react";

export class FormSubmitButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.getClassResponse = this.getClassResponse.bind(this);
  }

  getClassResponse() {
    console.log(this.props.response);
    switch (this.props.response) {
      case "success":
      case "pending":
        return this.props.response;
      case "":
        return "none";
      default:
        return "error";
    }
  }

  render() {
    let { response, onClick } = this.props;

    return (
      <div className="">
        <input
          type="button"
          className="submit-button"
          value="Envoyez"
          onClick={onClick}
        />
        <span className={`response ${this.getClassResponse()}`}>
          {response !== undefined
            ? response !== "pending"
              ? response
              : ""
            : ""}
        </span>
      </div>
    );
  }
}

export default FormSubmitButton;
