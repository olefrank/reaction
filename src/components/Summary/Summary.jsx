import React from "react";
import PropTypes from "prop-types";

const Summary = ({ onNext }) => (
  <div className="Summary">
    <h2>Summary</h2>
    <button onClick={onNext}>Restart</button>
  </div>
);

Summary.propTypes = {
  onNext: PropTypes.func.isRequired
};

export default Summary;
