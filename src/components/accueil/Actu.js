import React from "react";
import { Link } from "react-router-dom";

function Actu() {
  return (
    <Link className="actu" to="/">
      <span>Titre actu match etc etc etc</span>
      <svg width="100%" height="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
      </svg>
    </Link>
  );
}

export default Actu;
