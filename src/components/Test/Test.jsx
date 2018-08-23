import React from "react";
import PropTypes from "prop-types";
import { getElementPositions } from "./TestUtils";
import { withAppContext } from "../../hoc/withAppContext";
import "./Test.css";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: performance.now(),
      positions: []
    };
  }

  componentDidMount() {
    const { elements } = this.props;
    const container = this.div.getBoundingClientRect();
    const elementDimensions = {
      width: 100,
      height: 100
    };

    //generate element positions
    const positions = getElementPositions(
      container,
      elements,
      elementDimensions
    );

    this.setState({ elements, positions });
  }

  render() {
    const { elements } = this.props;
    const { positions } = this.state;

    return (
      <div className="Test">
        <div
          className="Test__area"
          ref={div => {
            this.div = div;
          }}
        >
          {this.renderElements(elements, positions)}
        </div>
      </div>
    );
  }

  handleElementClick = correct => {
    const { id, addResult, nextStep } = this.props;

    // if clicked correct
    if (correct) {
      const now = performance.now();

      // calculate time
      const time = now - this.state.time;
      const result = { id, time };

      // add results
      addResult(result);

      // continue
      nextStep();
    }
  };

  renderElements = (elements, positions) => {
    return elements.map((Element, i) => {
      const position = positions.shift();

      if (position) {
        return (
          <Element
            key={i}
            correct={i === 0}
            onClick={correct => this.handleElementClick(correct)}
            x={position.x}
            y={position.y}
          />
        );
      }
      return null;
    });
  };
}

Test.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.func),
  addResult: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired
};

export default withAppContext(Test);
