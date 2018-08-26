import React from "react";
import PropTypes from "prop-types";
import "./withElement.css";

const withElementProps = (Shape, name = "") => {
  const defaults = {
    x: 0,
    y: 0,
    width: 60,
    height: 60,
    strokeWidth: 6,
    className: "",
    disabled: false,
    correct: false,
    color: "black"
  };
  const HOC = p => {
    const props = { ...defaults, ...p };
    return (
      <div
        style={{ left: props.x, top: props.y }}
        className={`Element ${props.className ? props.className : ""} ${
          props.disabled ? "disabled" : ""
        }`}
        onClick={e => props.onClick(props.correct)}
        data-e2e={props.correct ? "correct" : "incorrect"}
      >
        <Shape name={name} {...props} />
      </div>
    );
  };

  HOC.propTypes = {
    onClick: PropTypes.func.isRequired,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    strokeWidth: PropTypes.number,
    color: PropTypes.string,
    className: PropTypes.string,
    correct: PropTypes.bool,
    disabled: PropTypes.bool
  };

  return HOC;
};

export default withElementProps;
