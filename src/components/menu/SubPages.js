import React from "react";
import { Link } from "react-router-dom";

const SubPages = (props) => {
  let { pages, value } = props;

  return (
    <div className="nav-col">
      {pages.map((page) =>
        page.index.name === `${value}` ? (
          <Link to={`/${page.ref}`} className="nav-item">
            {`${page.title}`}
          </Link>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default SubPages;
