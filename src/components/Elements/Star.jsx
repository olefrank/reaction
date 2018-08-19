import React from "react";
import withElement from "../../hoc/withElement";

export const Star = ({ width, height, strokeWidth, color }) => {
  width = 80;
  height = 80;
  return (
    <svg width={width} height={height} viewBox="0 0 110 100">
      <polygon
        points="53,3 66,38 103,38 73,63 83,95 53,75 23,95 33,63 3,38 40,38"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  );
};

export default withElement(Star);
