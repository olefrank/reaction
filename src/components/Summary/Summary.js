import React from "react";
import PropTypes from "prop-types";
import { roundDecimals } from "../../utils";

import "./Summary.css";

const Summary = ({ results, onClick }) => {
  const total = results.reduce((acc, result) => acc + result.time, 0);
  const avg = total / results.length;
  const avgFormatted = roundDecimals(avg / 1000);

  return (
    <div className="Summary">
      <h1>Summary</h1>
      <div className="Summary__results">
        {results && results.map((result, i) => renderResult(result, i))}
        <div className="Summary__results-item">
          <span>Average</span>
          <span>{`${avgFormatted} sec.`}</span>
        </div>
      </div>
      <button className="Summary__button-restart btn" onClick={onClick}>
        Restart
      </button>
    </div>
  );
};

const renderResult = (result, i) => {
  const timeFormatted = roundDecimals(result.time / 1000);
  return (
    <div key={i} className="Summary__results-item">
      <span>{`#${result.stepIndex}`}</span>
      <span>{`${timeFormatted} sec.`}</span>
    </div>
  );
};

Summary.propTypes = {
  onClick: PropTypes.func,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      stepIndex: PropTypes.number,
      time: PropTypes.number
    })
  )
};

export default Summary;
