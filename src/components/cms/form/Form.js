import React, { Component } from "react";
import CMSLayout from "../CMSLayout";
import FormArticle from "./FormArticle";
import FormEquipe from "./FormEquipe";
import FormInscription from "./FormInscription";
import FormLicencie from "./FormLicencie";
import FormPage from "./FormPage";
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
          <form>
            <FormArticle schema={schema} id={id} />
          </form>
        );
      case "equipes":
        return (
          <form>
            <FormEquipe schema={schema} id={id} />
          </form>
        );
      case "inscriptions":
        return (
          <form>
            <FormInscription schema={schema} id={id} />
          </form>
        );
      case "licencies":
        return (
          <form>
            <FormLicencie schema={schema} id={id} />
          </form>
        );
      case "partenaires":
        return (
          <form>
            <FormPartenaire schema={schema} id={id} />
          </form>
        );
      case "produits":
        return (
          <form>
            <FormProduit schema={schema} id={id} />
          </form>
        );
      case "accueil":
      case "club":
      case "infos":
      case "arbitrage":
      case "contact":
      case "pages":
        return (
          <form>
            <FormPage schema="pages" id={id} index={schema} />
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
