import React, { Component } from 'react'

export class CoordonnesChamp extends Component {
  render() {
    let { name, label, type, value, size, pattern, onChange} = this.props;
    return (
      <div className={"col-lg-" + size}>
        <label id={name} className="col-2 col-form-label text-capitalize">
            {label}
          </label>
          <input
            name={name}
            type={type}
            value={value}
            pattern={pattern}
            onChange={onChange}
            className="form-control"
          ></input>
      </div>
    )
  }
}

export default CoordonnesChamp
