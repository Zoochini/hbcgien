import React from "react";

const Wrapper = ({ children }) => <div>{children}</div>;

function Dropdown({ children, value }) {
  console.log(children);
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
        {React.Children.map(children, (child) =>
          React.cloneElement(child, child.props, [
            <span>{child.props.children}</span>,
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>,
          ])
        )}
      </div>
    </div>
  );
}

export default Dropdown;
