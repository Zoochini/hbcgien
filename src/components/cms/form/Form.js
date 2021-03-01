import React, { Component } from "react";
import CMSLayout from "../CMSLayout";
import FormArticle from "./FormArticle";
import FormEquipe from "./FormEquipe";
import FormInscription from "./FormInscription";
import FormLicencie from "./FormLicencie";
import FormPartenaire from "./FormPartenaire";
import FormProduit from "./FormProduit";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.getForm = this.getForm.bind(this);
  }

  getForm() {
    let { schema, id } = this.props.match.params;
    switch (schema) {
      case "articles":
        return (
          <form className="">
            <FormArticle schema={schema} id={id} />
          </form>
        );
      case "equipes":
        return (
          <form className="">
            <FormEquipe schema={schema} id={id} />
          </form>
        );
      case "inscriptions":
        return (
          <form className="">
            <FormInscription schema={schema} id={id} />
          </form>
        );
      case "licencies":
        return (
          <form className="">
            <FormLicencie schema={schema} id={id} />
          </form>
        );
      case "partenaires":
        return (
          <form className="">
            <FormPartenaire schema={schema} id={id} />
          </form>
        );
      case "produits":
        return (
          <form className="">
            <FormProduit schema={schema} id={id} />
          </form>
        );
      default:
        break;
    }
  }

  render() {
    return <CMSLayout className="form">{this.getForm()}</CMSLayout>;
  }
}

export default Form;
