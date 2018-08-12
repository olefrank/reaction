import React from "react";
import PropTypes from "prop-types";
import { results as resultsProps } from "../../propTypes/shared";
import "./AppHeader.css";

const AppHeader = ({ step, results, countdown }) => {
  return (
    <header className="AppHeader">
      <h1 className="AppHeader__step">
        {results && step === "Game" && `#${results.length + 1}`}
      </h1>
      <h1 className="AppHeader__title">Reaction</h1>
      <h1 className="AppHeader__countdown">{countdown}</h1>
    </header>
  );
};

AppHeader.propTypes = {
  results: resultsProps,
  step: PropTypes.string,
  countdown: PropTypes.number
};

export default AppHeader;
