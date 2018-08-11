import React from "react";
import PropTypes from "prop-types";

import "./Summary.css";

const Summary = ({ results, onClick }) => {
  console.log(results);
  return (
    <div>
      <h1>Summary</h1>
      <button onClick={onClick}>Start</button>
    </div>
  );
};

Summary.propTypes = {
  onClick: PropTypes.func,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      step: PropTypes.number,
      time: PropTypes.number
    })
  )
};

export default Summary;
