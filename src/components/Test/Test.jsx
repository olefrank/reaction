import React from "react";
import PropTypes from "prop-types";
import Circle from "../Elements/Circle";
import "./Test.css";

const Test = ({ onNext, id }) => (
  <div className="Test">
    <h2>Test #{id}</h2>
    <div className="Test__area">
      <Circle
        x={0}
        y={0}
        disabled={false}
        correct={true}
        onClick={handleElementClick}
      />
    </div>
    <button onClick={onNext}>Next</button>
  </div>
);

Test.propTypes = {
  onNext: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default Test;

const handleElementClick = correct => {
  if (correct) {
    console.log("correct");
  }
};
