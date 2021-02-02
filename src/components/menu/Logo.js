import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/resources/club-logo.png"
        alt="Handball club de gien"
        width="48"
        height="48"
      />
    </Link>
  );
}

export default Logo;
