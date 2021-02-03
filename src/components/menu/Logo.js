import React from "react";
import { Link } from "react-router-dom";

function Logo({className}) {
  return (
    <Link to="/" id="logo" className={className}>
      <img
        src="/resources/club-logo.png"
        alt="Handball club de gien"
        width="48"
        height="48"
      />
      <span>HBC Gien Loiret</span>
    </Link>
  );
}

export default Logo;
