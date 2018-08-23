import React from "react";
import PropTypes from "prop-types";
import "./Introduction.css";

const Introduction = ({ countdown, id, element: Element }) => {
  return (
    <div className="Introduction">
      <h2>Test #{id}</h2>
      <h4>{countdown}</h4>
      {Element && (
        <div className="Introduction__element-wrap">
          Click on <Element onClick={noop} /> to win
        </div>
      )}
    </div>
  );
};

const noop = () => {};

Introduction.propTypes = {
  countdown: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  element: PropTypes.func
};

export default Introduction;
