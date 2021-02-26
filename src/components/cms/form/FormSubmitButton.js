import React, { Component } from 'react'

export class FormSubmitButton extends Component {
  render() {
    let { response, onClick } = this.props;
    return (
      <div className="col-lg-12">
        <input type="button" className="btn btn-primary" value="Envoyez" onClick={onClick} />
        <p>{response !== undefined ? response : ""}</p>
      </div>
    )
  }
}

export default FormSubmitButton
