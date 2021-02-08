import React, { useState } from "react";

function CollapseButton() {
  const [collapsed, setCollapsed] = useState("notCollapsed");

  function handleFocus(e) {
    setCollapsed("collapsed");
  }

  function handleBlur(e) {
    setCollapsed("notCollapsed");
  }

  return (
    <button
      id="collapseButton"
      className={collapsed}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
      </svg>
    </button>
  );
}

export default CollapseButton;
