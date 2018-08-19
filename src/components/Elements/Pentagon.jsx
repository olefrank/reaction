import React from "react";
import withElement from "./withElement";

const Pentagon = ({ width, height, strokeWidth, color }) => {
  return (
    <svg width={width} height={height}>
      <polygon
        points="30,3 56,19 56,51 3,51 3,19"
        stroke={color}
        fill="none"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default withElement(Pentagon);
