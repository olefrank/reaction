import React from "react";
import withElement from "./withElement";

const Circle = ({ width, height, strokeWidth, color }) => {
  return (
    <svg width={width} height={height}>
      <circle
        cx="30"
        cy="30"
        r="27"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  );
};

export default withElement(Circle);
