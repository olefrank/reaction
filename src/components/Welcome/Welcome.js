import React from "react";
import PropTypes from "prop-types";

import "./Welcome.css";

const Welcome = ({ onClick }) => {
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={onClick}>Start</button>{" "}
    </div>
  );
};

Welcome.propTypes = {
  onClick: PropTypes.func
};

export default Welcome;
