import React from "react";
import PropTypes from "prop-types";
import * as utils from "../../utils";
import "./Summary.css";

const Summary = ({ onNext, results }) => {
  const total = results.reduce((acc, result) => acc + result.time, 0);
  const avg = total / results.length;
  const avgFormatted = utils.roundDecimals(avg / 1000);

  return (
    <div className="Summary">
      <h2>Summary</h2>
      <div className="Summary__results">
        {results && results.map((result, i) => renderResult(result, i))}
        <div className="Summary__results-item">
          <span>Average</span>
          <span>{`${avgFormatted} sec.`}</span>
        </div>
      </div>
      <button onClick={onNext}>Restart</button>
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
  const timeFormatted = utils.roundDecimals(result.time / 1000);

  return (
    <div key={key} className="Summary__results-item">
      <span>{`#${result.id}`}</span>
      <span>{`${timeFormatted} sec.`}</span>
    </div>
  );
};

Summary.propTypes = {
  onNext: PropTypes.func.isRequired
};

export default Summary;
