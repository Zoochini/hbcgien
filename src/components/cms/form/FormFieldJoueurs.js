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
    return (
      <div>
        <label for={name}>{label} :</label>
        <select
          name={name}
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
          let item = licencies.find((e) => e._id === v._id);
          return (
            <button type="button" value={v} onClick={onClick}>
              {item.nom + " " + item.prenom}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
            </button>
          );
        })}
      </div>
    );
  }
}

export default FormFieldJoueurs;
