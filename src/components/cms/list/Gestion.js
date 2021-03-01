import React, { Component } from "react";
import { Link } from "react-router-dom";
import List from "./List";
import CMSLayout from "../CMSLayout";

export class Gestion extends Component {
  render() {
    let { schema } = this.props.match.params;
    return (
      <CMSLayout className="gestion">
        <Link className="add-button" to={`/__admin/${schema}/new`}>
          Ajouter {schema}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
          </svg>
        </Link>
        <List schema={this.props.match.params.schema} />
      </CMSLayout>
    );
  }
}

export default Gestion;
