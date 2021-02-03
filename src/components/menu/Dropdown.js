import React from "react";

function Dropdown({ children, value }) {
  return (
    <div id="dropdown" className="nav-item">
      <button>{value}</button>
      <div id="submenu">{children}</div>
    </div>
  );
}

export default Dropdown;
