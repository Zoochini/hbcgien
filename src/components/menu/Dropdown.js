import React from "react";

function Dropdown({ children, value }) {
  return (
    <div id="dropdown" className="nav-item">
      <button>
        {value}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          className="mx-2"
        >
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
        </svg>
      </button>
      <div id="submenu">
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
