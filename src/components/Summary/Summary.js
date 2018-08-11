import React from "react";
import PropTypes from "prop-types";
import { roundDecimals } from "../../utils";

import "./Summary.css";

const Summary = ({ results, onClick }) => {
  const total = results.reduce((acc, result) => acc + result.time, 0);
  const avg = total / results.length;
  const avgFormatted = roundDecimals(avg / 1000);

  return (
    <div>
      <h1>Summary</h1>
      {results &&
        results.map((result, i) => {
          return renderResult(result, i);
        })}
      <div className="Summary__average">{`Average: ${avgFormatted} sec.`}</div>

      <button className="Summary__btn-restart" onClick={onClick}>
        Restart
      </button>
    </div>
  );
};

const renderResult = (result, i) => {
  const timeFormatted = roundDecimals(result.time / 1000);
  return (
    <div key={i} className="Summary__result">{`Step ${
      result.stepIndex
    }: ${timeFormatted} sec.`}</div>
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
