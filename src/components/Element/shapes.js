import React from "react";

export const Circle = ({ color = "black" }) => {
  return (
    <svg width="60" height="60" className="Circle" name="Circle">
      <circle
        cx="30"
        cy="30"
        r="27"
        stroke={color}
        strokeWidth="6"
        fill="none"
      />
    </svg>
  );
};

export const Square = ({ color = "black" }) => {
  return (
    <svg width="60" height="60" className="Square" name="Square">
      <rect
        x="3"
        y="3"
        width="54"
        height="54"
        stroke={color}
        strokeWidth="6"
        fill="none"
      />
    </svg>
  );
};

export const Star = ({ color = "black" }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 110 100"
      className="Star"
      name="Star"
    >
      <polygon
        points="53,3 66,38 103,38 73,63 83,95 53,75 23,95 33,63 3,38 40,38"
        stroke={color}
        strokeWidth="6"
        fill="none"
      />
    </svg>
  );
};

export const Penta = ({ color = "black" }) => {
  return (
    <svg width="60" height="60" className="Penta" name="Penta">
      <polygon
        points="30,3 56,19 56,51 3,51 3,19"
        stroke={color}
        fill="none"
        strokeWidth="6"
      />
    </svg>
  );
};

export const Hexa = ({ color = "black" }) => {
  return (
    <svg width="60" height="70" className="Hexa" name="Hexa">
      <polygon
        points="30,3 56,19 56,51 30,66 3,51 3,19"
        stroke={color}
        fill="none"
        strokeWidth="6"
      />
    </svg>
  );
};
