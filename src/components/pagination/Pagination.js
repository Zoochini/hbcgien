import React, { Component } from "react";
import PaginationButton from "./PaginationButton";

export class Pagination extends Component {
  render() {
    let { page, nbPages } = this.props;
    page = parseInt(page, 10);

    return (
      <div className="col d-flex justify-content-center">
        <div className="pagination">
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
          <PaginationButton value={page} path={page} className={"active"} />
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
        </div>
      </div>
    );
  }
}

export default Pagination;
