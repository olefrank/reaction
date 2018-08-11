import React, { Component } from "react";
import PropTypes from "prop-types";
import Element from "../Element/Element";
import Introduction from "./Introduction";
import { getRandomNumber } from "../../utils";

const shapes = ["Circle", "Square", "Star", "Penta", "Hexa"];

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      showIntroduction: true,
      shapes: this.getTestShapes(),
      startTime: undefined
    };
  }

  render() {
    const { shapes, showIntroduction, step } = this.state;
    return (
      <div className="Test">
        {step}
        {showIntroduction ? (
          <Introduction
            color="black"
            shape={shapes && shapes[0]}
            onGameStart={this.onGameStart}
          />
        ) : (
          shapes.map((shape, index) => {
            return (
              <Element
                key={index}
                correct={index === 0 ? true : false}
                shape={shape}
                onClick={this.onElementClick}
              />
            );
          })
        )}
      </div>
    );
  }

  /**
   * Hide Introduction when game starts
   */
  onGameStart = () => {
    this.setState({ showIntroduction: false, startTime: performance.now() });
  };

  /**
   * Create new Test if current is finished
   * If all tests are done navigate to next step in App
   */
  onTestContinue = () => {
    const { numSteps, onAppContinue } = this.props;
    const { step } = this.state;

    if (numSteps > step) {
      this.setState({
        showIntroduction: true,
        startTime: undefined,
        shapes: this.getTestShapes(),
        step: this.state.step + 1
      });
    } else {
      onAppContinue();
    }
  };

  /**
   * Handle mouse click on element
   * @param {boolean} correctAnswer
   */
  onElementClick = correctAnswer => {
    if (correctAnswer) {
      const endTime = performance.now();
      const { step } = this.state;
      const time = endTime - this.state.startTime;
      this.props.addResult({ step, time });

      // continue test
      this.onTestContinue();
    }
  };

  /**
   * Generate list of shapes to use in this test
   * @param {number} numberOfIncorrect shapes (default = 4)
   */
  getTestShapes = (numberOfIncorrect = 4) => {
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
   * Gets random number between 0 and max but not a certain one (if specified)
   * @param {number} max
   * @param {number} notThis if specified don't return this number
   */
  getRandomNumberNotThis = (max, notThis) => {
    let found = false;
    let random;

    while (!found) {
      random = getRandomNumber(max);
      if (random !== notThis) {
        found = true;
      }
    }
    return random;
  };
}

Test.propTypes = {
  numSteps: PropTypes.number,
  addResult: PropTypes.func
};

export default Test;
