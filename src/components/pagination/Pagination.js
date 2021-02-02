import React, { Component } from "react";
import PaginationButton from "./PaginationButton";

export class Pagination extends Component {
  render() {
    let { page, nbPages } = this.props;
    page = parseInt(page, 10);

    return (
      <div className="row">
        <div className="col">
          <nav>
            <ul className="pagination justify-content-center">
              {page - 1 > 0 ? (
                <PaginationButton value="Précédent" path={page - 1} />
              ) : (
                ""
              )}
              {page - 1 > 0 ? (
                <PaginationButton value={page - 1} path={page - 1} />
              ) : (
                ""
              )}
              <PaginationButton value={page} path={page} active={"active"} />
              {nbPages > page ? (
                <PaginationButton value={page + 1} path={page + 1} />
              ) : (
                ""
              )}
              {nbPages > page ? (
                <PaginationButton value="Suivant" path={page + 1} />
              ) : (
                ""
              )}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Pagination;
