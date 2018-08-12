import React from "react";
import PropTypes from "prop-types";

import "./Welcome.css";

const Welcome = ({ onClick }) => {
  return (
    <div className="Welcome">
      <h1 className="Welcome__title">Welcome</h1>
      <p className="Welcome__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <button className="Welcome__btn-start btn" onClick={onClick}>
        Start
      </button>{" "}
    </div>
  );
};

Welcome.propTypes = {
  onClick: PropTypes.func
};

export default Welcome;
