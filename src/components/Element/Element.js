import React, { Component } from "react";
import PropTypes from "prop-types";
import { getRandomNumber } from "../../utils";
import "./Element.css";

class Element extends Component {
  render() {
    const { shape, onClick, correct } = this.props;
    const posX = getRandomNumber(700);
    const posY = getRandomNumber(400);

    return (
      <div
        className="Element"
        style={{ left: posX, top: posY }}
        onClick={() => {
          onClick(correct);
        }}
      >
        {this.renderShape(shape)}
      </div>
    );
  }

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
  onClick: PropTypes.func
};

export default Element;
