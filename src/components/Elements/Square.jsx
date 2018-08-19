import React from "react";
import withElement from "./withElement";

const Square = ({ width, height, strokeWidth, color }) => {
  return (
    <svg width={width} height={height}>
      <rect
        x="3"
        y="3"
        width="54"
        height="54"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  );
};

export default withElement(Square);
