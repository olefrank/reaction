import React from "react";
import PropTypes from "prop-types";
import { getTestElements } from "./TestWrapUtils";
import Introduction from "../Introduction/Introduction";
import Test from "../Test/Test";
import "./TestWrap.css";

class TestWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      countdown: 3,
      timer: undefined
    };
  }

  componentDidMount() {
    const { numElements } = this.props;

    //generate elements
    const elements = getTestElements(numElements);

    // start timer
    const timer = setInterval(() => {
      this.setState({ countdown: this.state.countdown - 1 });
    }, 1000);

    this.setState({ elements, timer });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
    this.setState({ timer: undefined });
  }

  render() {
    const { id, addResult, nextStep } = this.props;
    const { countdown, elements } = this.state;

    // stop timer
    if (this.state.countdown === 0) {
      clearInterval(this.state.timer);
    }

    return (
      <div className="TestWrap">
        {countdown > 0 ? (
          <Introduction countdown={countdown} id={id} element={elements[0]} />
        ) : (
          <Test
            elements={elements}
            addResult={addResult}
            nextStep={nextStep}
            id={id}
          />
        )}
      </div>
    );
  }
}

TestWrap.propTypes = {
  numElements: PropTypes.number.isRequired,
  addResult: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired
};

export default TestWrap;
