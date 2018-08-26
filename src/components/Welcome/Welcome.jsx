import React from "react";
import PropTypes from "prop-types";
import "./Welcome.css";

const Welcome = ({ onNext, numTests, changeSteps }) => (
  <div className="Welcome">
    <h2>Welcome</h2>

    <p>Select number of tests</p>
    <select
      value={numTests}
      onChange={e => handleNumTestsChange(e, changeSteps)}
    >
      {renderOptions(5)}
    </select>
    <button onClick={onNext}>Start</button>
  </div>
);

Welcome.propTypes = {
  onNext: PropTypes.func.isRequired,
  changeSteps: PropTypes.func.isRequired,
  numTests: PropTypes.number.isRequired
};

export default Welcome;

const renderOptions = numOptions => {
  return [...Array(numOptions)].map((item, i) => (
    <option key={i} value={i + 1}>
      {i + 1}
    </option>
  ));
};

const handleNumTestsChange = (e, handleChange) => {
  const numTests = parseInt(e.currentTarget.value, 10);
  handleChange(numTests);
};
