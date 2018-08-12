import PropTypes from "prop-types";

export const results = PropTypes.arrayOf(
  PropTypes.shape({
    stepIndex: PropTypes.number,
    time: PropTypes.number
  })
);
