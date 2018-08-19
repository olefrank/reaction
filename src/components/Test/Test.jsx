import React from "react";
import PropTypes from "prop-types";
import { getTestElements, getElementPositions } from "./TestUtils";
import "./Test.css";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: performance.now(),
      elements: [],
      positions: []
    };
  }

  componentDidMount() {
    const { numElements } = this.props;
    const container = this.div.getBoundingClientRect();

    //generate elements
    const elements = getTestElements(numElements);
    const positions = getElementPositions(container, elements, {
      width: 100,
      height: 100
    });

    this.setState({ elements, positions });
  }

  render() {
    const { id } = this.props;
    const { elements, positions } = this.state;

    return (
      <div className="Test">
        <h2>Test #{id}</h2>
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
    const { id, addResult, onNext } = this.props;

    // if clicked correct
    if (correct) {
      const now = performance.now();

      // calculate time
      const time = now - this.state.time;
      const result = { id, time };

      // add results
      addResult(result);

      // continue
      onNext();
    }
  };

  renderElements = (elements, positions) => {
    return elements.map((Element, i) => {
      const position = positions.shift();
      return (
        <Element
          key={i}
          correct={i === 0}
          onClick={correct => this.handleElementClick(correct)}
          x={position.x}
          y={position.y}
        />
      );
    });
  };
}

Test.propTypes = {
  onNext: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  addResult: PropTypes.func.isRequired,
  numElements: PropTypes.number.isRequired
};

export default Test;
