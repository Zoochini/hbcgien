import React, { Component } from "react";
import { Link } from "react-router-dom";
import List from "./List";
import CMSLayout from "../CMSLayout";

export class Gestion extends Component {
  render() {
    let { schema } = this.props.match.params;
    return (
      <CMSLayout>
        <div className="row">
          <Link className="" to={`/__admin/${schema}/new`}>
            <span className="">Ajouter {schema}</span>
            <span className="oi oi-plus" title="plus" aria-hidden="true"></span>
          </Link>
        </div>
        <div className="row">
          <List schema={this.props.match.params.schema} />
        </div>
      </CMSLayout>
    );
  }
}

export default Gestion;
