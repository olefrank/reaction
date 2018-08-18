import React from "react";
import PropTypes from "prop-types";

const Test = ({ onNext, id }) => (
  <div className="Test">
    <h2>Test #{id}</h2>
    <button onClick={onNext}>Next</button>
  </div>
);

Test.propTypes = {
  onNext: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default Test;
