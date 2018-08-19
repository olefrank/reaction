import React from "react";
import PropTypes from "prop-types";
import { Circle, Square, Star, Hexagon, Pentagon } from "../Elements/Elements";

import "./Test.css";

const elements = [Circle, Square, Star, Pentagon, Hexagon];
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: performance.now()
    };
  }

  render() {
    const { id } = this.props;

    // choose random element
    const Element = elements[4];

    return (
      <div className="Test">
        <h2>Test #{id}</h2>
        <div className="Test__area">
          <Element onClick={correct => this.handleElementClick(correct)} />
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
}

Test.propTypes = {
  onNext: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  addResult: PropTypes.func.isRequired
};

export default Test;
