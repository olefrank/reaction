import React from "react";
import withElement from "./withElement";

const Hexagon = ({ width, height, strokeWidth, color }) => {
  height = 70;
  return (
    <svg width={width} height={height}>
      <polygon
        points="30,3 56,19 56,51 30,66 3,51 3,19"
        stroke={color}
        fill="none"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default withElement(Hexagon);
