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

    // calculate position
    const { left, top } = this.calcElementPosition(containerDimensions);
    this.setState({ left, top });
  }

  render() {
    const { shape, onClick, correct } = this.props;
    const { left, top } = this.state;

    return (
      <div
        className="Element"
        style={{ left, top }}
        onClick={() => {
          onClick(correct);
        }}
      >
        {this.renderShape(shape)}
      </div>
    );
  }

  // todo
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

  renderShape = name => {
    let Shape;

    switch (name) {
      case "Square":
        Shape = require("./shapes").Square;
        break;

      case "Star":
        Shape = require("./shapes").Star;
        break;

      case "Penta":
        Shape = require("./shapes").Penta;
        break;

      case "Hexa":
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
