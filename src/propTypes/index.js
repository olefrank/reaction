import PropTypes from "prop-types";

export const result = PropTypes.shape({
  stepIndex: PropTypes.number,
  time: PropTypes.number
});

export const results = PropTypes.arrayOf(result);
