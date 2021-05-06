import React, { Component } from "react";

export class FormFieldCategorie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: [],
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URI}indexs`)
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({ index: res });
        },
        (err) => {
          console.log(err);
        }
      );
  }

  render() {
    let { name, label, value, onChange } = this.props;
    let { index } = this.state;
    return (
      <div className="form-group col-lg-3">
        <label for={name}>{label} :</label>
        <select
          name={name}
          className="custom-select mb-2"
          value={value}
          onChange={onChange}
        >
          <option value="" disabled selected>
            Choisissez un type
          </option>
          {index.map((v) => {
            return <option value={v._id}>{v.name}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default FormFieldCategorie;
