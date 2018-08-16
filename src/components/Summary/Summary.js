import React from "react";
import PropTypes from "prop-types";
import { results as resultsProps } from "../../propTypes/shared";
import { roundDecimals } from "../../utils";

import "./Summary.css";

const Summary = ({ results, onClick }) => {
  const total = results.reduce((acc, result) => acc + result.time, 0);
  const avg = total / results.length;
  const avgFormatted = roundDecimals(avg / 1000);

  return (
    <div className="Summary">
      <h1 data-e2e="summary-title">Summary</h1>
      <div className="Summary__results" data-e2e="summary-results">
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

/**
 * Render row with step and time
 * @param {number} result
 * @param {number} key
 */
const renderResult = (result, key) => {
  // format time in rounded secs.
  const timeFormatted = roundDecimals(result.time / 1000);

  return (
    <div key={key} className="Summary__results-item">
      <span>{`#${result.testIndex}`}</span>
      <span>{`${timeFormatted} sec.`}</span>
    </div>
  );
};

Summary.propTypes = {
  onClick: PropTypes.func,
  results: resultsProps
};

export default Summary;
