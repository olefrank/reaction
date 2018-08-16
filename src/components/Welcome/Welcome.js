import React from "react";
import PropTypes from "prop-types";
import "./Welcome.css";

const Welcome = ({ onClick }) => {
  return (
    <div className="Welcome">
      <h1 className="Welcome__title" data-e2e="welcome-title">
        Welcome
      </h1>
      <p className="Welcome__text">
        Reaction is a game about reacting fast! The game will show 5 test. All
        you have to do is click the correct shape in each test as fast as you
        can! In the end your results will be summarized together with average
        reacting time.
      </p>
      <button
        className="Welcome__btn-start btn"
        onClick={onClick}
        data-e2e="start-button"
      >
        Start
      </button>{" "}
    </div>
  );
};

Welcome.propTypes = {
  onClick: PropTypes.func
};

export default Welcome;
