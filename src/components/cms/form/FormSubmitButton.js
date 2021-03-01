import React, { Component } from 'react'

export class FormSubmitButton extends Component {
  render() {
    let { response, onClick } = this.props;
    return (
      <div className="">
        <input type="button" className="submit-button" value="Envoyez" onClick={onClick} />
        <p>{response !== undefined ? response : ""}</p>
      </div>
    )
  }
}

export default FormSubmitButton
