import React, { Component } from "react";
import PropTypes from "prop-types";
import Element from "../Element/Element";
import Introduction from "./Introduction";
import { getRandomNumber } from "../../utils";
import { withAppContext } from "../../contexts";
import "./Test.css";

const shapes = ["Circle", "Square", "Star", "Pentagon", "Hexagon"];

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIntroduction: true,
      shapes: this.getTestShapes(),
      startTime: undefined
    };
  }

  render() {
    const { shapes, showIntroduction } = this.state;
    return (
      <div className="Test">
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
    const { numTests, onAppContinue, context } = this.props;
    console.log(numTests, context.currentTestIndex);
    if (numTests > context.currentTestIndex) {
      console.log(1);
      this.setState(
        {
          showIntroduction: true,
          startTime: undefined,
          shapes: this.getTestShapes()
        },
        context.setCurrentTestIndex(context.currentTestIndex + 1)
      );
    } else {
      console.log(2);
      onAppContinue();
    }
  };

  /**
   * Handle mouse click on element
   * @param {boolean} correctAnswer
   */
  onElementClick = correctAnswer => {
    if (correctAnswer) {
      const { context } = this.props;
      const { currentTestIndex: testIndex } = context;

      // calculate time
      const endTime = performance.now();
      const time = endTime - this.state.startTime;

      // update results
      this.props.addResult({ testIndex, time });

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
  testIndex: PropTypes.number,
  numTests: PropTypes.number,
  addResult: PropTypes.func,
  onAppContinue: PropTypes.func
};

export default withAppContext(Test);
