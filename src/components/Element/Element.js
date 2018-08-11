import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Element.css";

class Element extends Component {
  render() {
    const { shape, x, y } = this.props;
    return (
      <div
        className="Element"
        style={{ left: x, top: y }}
        onClick={this.onClick}
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

  onClick = e => {
    if (this.props.correct) {
      alert("CORRECT");
    }
  };
}

Element.propTypes = {
  correct: PropTypes.bool,
  shape: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number
};

export default Element;
