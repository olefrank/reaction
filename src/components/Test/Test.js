import React, { Component } from "react";
import PropTypes from "prop-types";
import Element from "../Element/Element";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shapes: this.getTestShapes()
    };
  }

  render() {
    const { shapes } = this.state;
    const { step } = this.props;
    return (
      <div className="Test">
        {step}
        {shapes.map((shape, index) => {
          const posX = this.getRandomNumber(800);
          const posY = this.getRandomNumber(400);
          return (
            <Element
              key={index}
              correct={index === 0 ? true : false}
              shape={shape}
              x={posX}
              y={posY}
            />
          );
        })}
      </div>
    );
  }

  /**
   * Generate list of shapes to use in this test
   */
  getTestShapes = (numberOfIncorrect = 4) => {
    const { shapes } = this.props;
    const testShapes = [];
    const maxIndex = shapes.length - 1;

    // get correct shape
    const correctIndex = this.getRandomNumberNotThis(maxIndex);
    testShapes.push(shapes[correctIndex]);

    // get other shapes
    let randomIndex;
    for (let i = 0; i < numberOfIncorrect; i++) {
      randomIndex = this.getRandomNumberNotThis(maxIndex, correctIndex);
      testShapes.push(shapes[randomIndex]);
    }
    return testShapes;
  };

  /**
   * Get random number between min and max
   * @param {number} max
   * @param {number} min (default = 0)
   */
  getRandomNumber = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  /**
   * Gets random number between 0 and max but not a certain one (if specified)
   * @param {number} max
   * @param {number} notThis if specified don't return this number
   */
  getRandomNumberNotThis = (max, notThis) => {
    let found = false;
    let random;

    while (!found) {
      random = this.getRandomNumber(max);
      if (random !== notThis) {
        found = true;
      }
    }
    return random;
  };
}

Test.propTypes = {
  shapes: PropTypes.arrayOf(PropTypes.string),
  step: PropTypes.number
};

Test.defaultProps = {
  shapes: [],
  step: 1
};

export default Test;
