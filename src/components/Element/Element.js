import React, { Component } from "react";
import PropTypes from "prop-types";
import { getRandomNumber } from "../../utils";
import "./Element.css";

class Element extends Component {
  state = {
    left: 0,
    top: 0
  };

  componentDidMount() {
    const { containerDimensions } = this.props;

    // if containerDimensions given
    if (containerDimensions) {
      // calculate position
      const { left, top } = this.calcElementPosition(containerDimensions);
      this.setState({ left, top });
    }
  }

  render() {
    const { shape, onClick, correct, containerDimensions } = this.props;
    const { left, top } = this.state;

    return (
      <span
        className="Element"
        // position absolute relative to container (if given)
        style={{ position: containerDimensions && "absolute", left, top }}
        onClick={() => {
          onClick(correct);
        }}
      >
        {this.renderShape(shape)}
      </span>
    );
  }

  /**
   * Calculate Element position within container
   * @param {object} container dimensinos
   * @param {object} element dimensions
   * @param {number} borderWidth of element
   */
  calcElementPosition = (
    container,
    element = { width: 80, height: 80 },
    borderWidth = 6
  ) => {
    // max values relative to container
    const maxLeft = container.width - element.width - borderWidth;
    const maxTop = container.height - element.height - borderWidth;

    // generate random position
    const left = getRandomNumber(maxLeft);
    const top = getRandomNumber(maxTop);

    return { left, top };
  };

  /**
   * Get SVG shape from name
   * @param {string} name of shape
   */
  renderShape = name => {
    let Shape;

    switch (name) {
      case "Square":
        Shape = require("./shapes").Square;
        break;

      case "Star":
        Shape = require("./shapes").Star;
        break;

      case "Pentagon":
        Shape = require("./shapes").Penta;
        break;

      case "Hexagon":
        Shape = require("./shapes").Hexa;
        break;

      default:
        Shape = require("./shapes").Circle;
        break;
    }
    return <Shape />;
  };
}

Element.propTypes = {
  correct: PropTypes.bool,
  shape: PropTypes.string,
  onClick: PropTypes.func,
  parentDimensions: PropTypes.element
};

export default Element;
