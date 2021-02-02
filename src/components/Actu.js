import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Actu extends Component {
  render() {
    return (
      <div className="col-lg-3">
        <div className="card border rounded-0 border-primary">
          <Link to={`/article/${this.props.value._id}`} className="card-link">
            <img
              src="/resources/club-logo.png"
              className="card-img-top"
              alt={"News"}
            />
            <div className="card-body card-img-overlay p-0 d-flex flex-column justify-content-end">
              <div className="container-fluid py-2">
                <h4 className="card-title font-weight-bold">
                  Title of the news
                </h4>
                <h6 className="card-subtitle mb-2">
                  Insert date here
                </h6>
                <p className="card-text text-justify">
                  Beginning of the content
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Actu;
