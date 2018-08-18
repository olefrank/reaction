import React from "react";
import PropTypes from "prop-types";

const withNext = (Component, handleNext) => {
  const HOC = props => <Component {...props} onNext={handleNext} />;

  HOC.propTypes = {
    onNext: PropTypes.func
  };

  return HOC;
};

export default withNext;
