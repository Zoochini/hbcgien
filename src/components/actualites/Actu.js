import React from "react";
import { Link } from "react-router-dom";

function Actu(props) {
  let { _id, title } = props.value;
  return (
    <div className="d-flex justify-content-center col-lg-3 col my-2">
      <Link to={`/article/${_id}`} className="actu">
        <img src="/resources/club-logo.png" alt={title} />
        <h4 className="title">{title}</h4>
      </Link>
    </div>
  );
}

export default Actu;
