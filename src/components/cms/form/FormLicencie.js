import React, { Component } from "react";
import FormField from "./FormField";
import FormSubmitButton from "./FormSubmitButton";
import { accessToken } from "../../../utils";

export class FormLicencie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nom: "",
      prenom: "",
      sexe: "",
      numLicence: "",
      mention: "",
      dateNaissance: "",
      email: "",
      adresse: "",
      cp: "",
      ville: "",
      offreCom: "",
      portable: "",
      domicile: "",
      bureau: "",
      resp_legal_1: "",
      resp_legal_2: "",
      licencie: "",
      response: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendLicencie = this.sendLicencie.bind(this);
  }

  handleChange(e) {
    let element = e.target;
    let newState = {};
    switch (element.name) {
      case "nom":
        newState = { nom: element.value };
        break;
      case "prenom":
        newState = { prenom: element.value };
        break;
      case "sexe":
        newState = { sexe: element.value };
        break;
      case "numLicence":
        newState = { numLicence: element.value };
        break;
      case "mention":
        newState = { mention: element.value };
        break;
      case "dateNaissance":
        newState = { dateNaissance: element.value };
        break;
      case "email":
        newState = { email: element.value };
        break;
      case "adresse":
        newState = { adresse: element.value };
        break;
      case "cp":
        newState = { cp: element.value };
        break;
      case "ville":
        newState = { ville: element.value };
        break;
      case "offreCom":
        newState = { offreCom: element.value };
        break;
      case "portable":
        newState = { portable: element.value };
        break;
      case "domicile":
        newState = { domicile: element.value };
        break;
      case "bureau":
        newState = { bureau: element.value };
        break;
      case "resp_legal_1":
        newState = { resp_legal_1: element.value };
        break;
      case "resp_legal_2":
        newState = { resp_legal_2: element.value };
        break;
      case "licencie":
        newState = { licencie: element.value };
        break;
      default:
        break;
    }
    this.setState(newState);
  }

  sendLicencie() {
    let { schema, id } = this.props;
    let { state } = this;

    //We tell the user the upload just starting
    this.setState({ response: "pending" });

    let tel = [];
    if (state.portable !== "")
      tel.push({ type: "portable", num: state.portable });
    if (state.domicile !== "")
      tel.push({ type: "domicile", num: state.domicile });
    if (state.bureau !== "") tel.push({ type: "bureau", num: state.bureau });
    if (state.resp_legal_1 !== "")
      tel.push({ type: "resp_legal_1", num: state.resp_legal_1 });
    if (state.resp_legal_2 !== "")
      tel.push({ type: "resp_legal_2", num: state.resp_legal_2 });
    if (state.licencie !== "")
      tel.push({ type: "licencie", num: state.licencie });

    let jsonToPost = {
      nom: state.nom,
      prenom: state.prenom,
      sexe: state.sexe,
      numLicence: state.numLicence,
      mention: state.mention,
      dateNaissance: state.dateNaissance,
      email: state.email,
      adresse: state.adresse,
      cp: state.cp,
      ville: state.ville,
      offreCom: state.offreCom,
      tel: tel,
    };

    let headers = new Headers({
      "Content-Type": "application/json",
      Authorization: accessToken(),
    });
    
    fetch(`${process.env.REACT_APP_API_URI}${schema}?id=${id}`, {
      method: id !== undefined ? "PUT" : "POST",
      headers: headers,
      body: JSON.stringify(jsonToPost),
    })
    .then((res) => res.json())
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
          let portable = res.tel.find((e) => e.type === "portable");
          let domicile = res.tel.find((e) => e.type === "domicile");
          let bureau = res.tel.find((e) => e.type === "bureau");
          let resp_legal_1 = res.tel.find((e) => e.type === "resp_legal_1");
          let resp_legal_2 = res.tel.find((e) => e.type === "resp_legal_2");
          let licencie = res.tel.find((e) => e.type === "licencie");
          let newState = {
            nom: res.nom,
            prenom: res.prenom,
            sexe: res.sexe,
            numLicencie: res.numLicencie,
            mention: res.mention,
            dateNaissance: res.dateNaissance,
            email: res.email,
            adresse: res.adresse,
            cp: res.cp,
            ville: res.ville,
            offreCom: res.offreCom,
            portable: portable !== undefined ? portable.num : "",
            domicile: domicile !== undefined ? domicile.num : "",
            bureau: bureau !== undefined ? bureau.num : "",
            resp_legal_1: resp_legal_1 !== undefined ? resp_legal_1.num : "",
            resp_legal_2: resp_legal_2 !== undefined ? resp_legal_2.num : "",
            licencie: licencie !== undefined ? licencie.num : "",
          };
          this.setState(newState);
        });
  }

  render() {
    let { state } = this;
    return (
      <div className="form-row justify-content-between">
        <FormField
          name="nom"
          label="Nom"
          value={state.nom}
          onChange={this.handleChange}
        />
        <FormField
          name="prenom"
          label="Prénom"
          value={state.prenom}
          onChange={this.handleChange}
        />
        <FormField
          name="sexe"
          label="Sexe"
          value={state.sexe}
          onChange={this.handleChange}
        />
        <FormField
          name="numLicence"
          label="Numéro Licence"
          value={state.numLicence}
          onChange={this.handleChange}
        />
        <FormField
          name="mention"
          label="Mention"
          value={state.mention}
          onChange={this.handleChange}
        />
        <FormField
          name="dateNaissance"
          label="Date de naissance"
          value={state.dateNaissance}
          onChange={this.handleChange}
        />
        <FormField
          name="email"
          label="E-mail"
          value={state.email}
          onChange={this.handleChange}
        />
        <FormField
          name="adresse"
          label="Adresse"
          value={state.adresse}
          onChange={this.handleChange}
        />
        <FormField
          name="cp"
          label="Code postal"
          value={state.cp}
          onChange={this.handleChange}
        />
        <FormField
          name="ville"
          label="Ville"
          value={state.ville}
          onChange={this.handleChange}
        />
        <FormField
          name="offreCom"
          label="Offre Com"
          value={state.offreCom}
          onChange={this.handleChange}
        />
        <FormField
          name="portable"
          label="Portable"
          value={state.portable}
          onChange={this.handleChange}
        />
        <FormField
          name="domicile"
          label="Domicile"
          value={state.domicile}
          onChange={this.handleChange}
        />
        <FormField
          name="bureau"
          label="Bureau"
          value={state.bureau}
          onChange={this.handleChange}
        />
        <FormField
          name="resp_legal_1"
          label="Responsable légal 1"
          value={state.resp_legal_1}
          onChange={this.handleChange}
        />
        <FormField
          name="resp_legal_2"
          label="Responsable légal 2"
          value={state.resp_legal_2}
          onChange={this.handleChange}
        />
        <FormField
          name="licencie"
          label="Licencie"
          value={state.licencie}
          onChange={this.handleChange}
        />
        <FormSubmitButton
          response={state.response}
          onClick={this.sendLicencie}
        />
      </div>
    );
  }
}

export default FormLicencie;
