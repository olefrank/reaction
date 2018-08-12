import React, { Component } from "react";
import PropTypes from "prop-types";
import Element from "../Element/Element";
import Introduction from "./Introduction";
import { getRandomNumber } from "../../utils";

import "./Test.css";

const shapes = ["Circle", "Square", "Star", "Penta", "Hexa"];

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: this.props.stepIndex,
      showIntroduction: true,
      shapes: this.getTestShapes(),
      startTime: undefined
    };
  }

  render() {
    const { shapes, showIntroduction, stepIndex } = this.state;
    return (
      <div className="Test">
        <h1>{`#${stepIndex}`}</h1>

        <div
          className="Test__container"
          ref={div => {
            this.div = div;
          }}
        >
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
                  containerDimensions={this.div.getBoundingClientRect()}
                  key={index}
                  correct={index === 0 ? true : false}
                  shape={shape}
                  onClick={this.onElementClick}
                />
              );
            })
          )}
        </div>
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
    const { stepIndex } = this.state;

    if (numSteps > stepIndex) {
      this.setState({
        showIntroduction: true,
        startTime: undefined,
        shapes: this.getTestShapes(),
        stepIndex: this.state.stepIndex + 1
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
      const { stepIndex } = this.state;
      const time = endTime - this.state.startTime;
      this.props.addResult({ stepIndex, time });

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
  stepIndex: PropTypes.number,
  numSteps: PropTypes.number,
  addResult: PropTypes.func
};

export default Test;
