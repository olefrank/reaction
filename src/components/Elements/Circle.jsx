import React from "react";
import PropTypes from "prop-types";
import "./Elements.css";

const Circle = ({
  x,
  y,
  width = 60,
  height = 60,
  color = "black",
  className,
  correct,
  disabled,
  onClick
}) => {
  return (
    <div
      style={{ left: x, top: y }}
      className={`Circle ${className} ${disabled && "disabled"}`}
      onClick={e => onClick(correct)}
    >
      <svg width={width} height={height}>
        <circle
          cx="30"
          cy="30"
          r="27"
          stroke={color}
          strokeWidth="6"
          fill="none"
        />
      </svg>
    </div>
  );
};

Circle.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  correct: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default Circle;
