import React from "react";
import FormFieldCategorie from "./FormFieldCategorie";
import FormFieldJoueurs from "./FormFieldJoueurs";
import FormFieldJoditEditor from "./FormFieldJoditEditor";
import FormFieldIndex from "./FormFieldIndex";

export default function FormField(props) {
  let { name, label, value, onChange, onClick } = props;
  switch (name) {
    case "joueurs":
      return (
        <FormFieldJoueurs
          name={name}
          label={label}
          value={value}
          onChange={onChange}
          onClick={onClick}
        />
      );
    case "image":
      return (
        <div className="form-group col-lg-3">
          <label for={name}>{label} :</label>
          <input
            className="form-control mb-2"
            type="file"
            name={name}
            accept="image/png, image/jpeg"
            onChange={onChange}
          ></input>
        </div>
      );
    case "file":
      return (
        <div className="form-group col-lg-3">
          <label for={name}>{label} :</label>
          <input
            className="form-control mb-2"
            type="file"
            name={name}
            accept="file/pdf"
            onChange={onChange}
          ></input>
        </div>
      );
    case "categorie":
      return (
        <FormFieldCategorie
          name={name}
          label={label}
          value={value}
          onChange={onChange}
        />
      );
    case "sexe":
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
              Choisissez un sexe
            </option>
            <option value="H">Homme</option>
            <option value="F">Femme</option>
          </select>
        </div>
      );
    case "mention":
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
              Choisissez une mention
            </option>
            <option value="+16">Joueur + 16 ans</option>
            <option value="+12">Joueur 12/16 ans</option>
            <option value="-12">Joueur -12 ans</option>
            <option value="Loisir">Loisir</option>
            <option value="Dirigeant">Dirigeant</option>
          </select>
        </div>
      );
    case "numLicencie":
    case "prixBase":
    case "prixClub":
      return (
        <div className="form-group col-lg-3">
          <label for={name}>{label} :</label>
          <input
            type="number"
            className="form-control mb-2"
            name={name}
            value={value}
            onChange={onChange}
          ></input>
        </div>
      );
    case "dateNaissance":
      return (
        <div className="form-group col-lg-3">
          <label for={name}>{label} :</label>
          <input
            type="date"
            className="form-control mb-2"
            name={name}
            value={value}
            onChange={onChange}
          ></input>
        </div>
      );
    case "email":
      return (
        <div className="form-group col-lg-3">
          <label for={name}>{label} :</label>
          <input
            type="email"
            className="form-control mb-2"
            name={name}
            value={value}
            onChange={onChange}
          ></input>
        </div>
      );
    case "content":
      return (
        <FormFieldJoditEditor
          name={name}
          label={label}
          value={value}
          onChange={onChange}
        />
      );
    case "index":
      return (
        <FormFieldIndex
          name="index"
          label="Type"
          value={value}
          onChange={onChange}
        />
      );
    default:
      return (
        <div className="form-group col-lg-3">
          <label for={name}>{label} :</label>
          <input
            name={name}
            className="form-control"
            value={value}
            onChange={onChange}
          ></input>
        </div>
      );
  }
}
