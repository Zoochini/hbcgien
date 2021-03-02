import React, { Component } from "react";

export class FormFieldJoueurs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      licencies: [],
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URI}licencies`)
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({ licencies: res });
        },
        (err) => {
          console.log(err);
        }
      );
  }

  render() {
    let { name, label, value, onChange, onClick } = this.props;
    let { licencies } = this.state;
    console.log("LICENCIES");
    console.log(licencies);
    return (
      <div>
        <label for={name}>{label} :</label>
        <select
          name={name}
          className="custom-select mb-2"
          value=""
          onChange={onChange}
        >
          <option value="" disabled selected>
            Choisissez un joueur
          </option>
          {licencies.map((v) => {
            return (
              <option value={v._id}>
                {v.nom} {v.prenom}
              </option>
            );
          })}
        </select>
        {value.map((v) => {
          let item = licencies.find((e) => e._id === v);
          return (
            <button
              type="button"
              value={v}
              onClick={onClick}
            >
              {item.nom + " " + item.prenom}
            </button>
          );
        })}
      </div>
    );
  }
}

export default FormFieldJoueurs;
