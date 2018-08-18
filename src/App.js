import React, { Component } from "react";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Summary from "./components/Summary/Summary";
import Test from "./components/Test/Test";
import withNext from "./hoc/withNext/withNext";

import "./App.css";

// all steps
export const welcome = { name: "welcome", component: Welcome };
export const test = { name: "test", component: Test, id: 1 };
export const summary = { name: "summary", component: Summary };

const initialState = {
  results: [],
  steps: [welcome, test, summary],
  numTests: 1
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  render() {
    const { steps } = this.state;
    return (
      <div className="App">
        <Header />
        {steps.length && this.renderStep()}
      </div>
    );
  }

  renderStep = () => {
    // all steps
    const { steps, numTests } = this.state;

    // current step
    const { name, component, id } = steps[0];

    switch (name) {
      case "test":
        const Test = withNext(component, this.handleNext);
        return <Test id={id} />;
      case "welcome":
        const Welcome = withNext(component, this.handleNext);
        return (
          <Welcome onChangeSteps={this.handleChangeSteps} numTests={numTests} />
        );
      default:
        const Summary = withNext(component, this.handleNext);
        return <Summary />;
    }
  };

  handleNext = e => {
    const { steps: oldSteps } = this.state;

    // get next step or restore all steps
    const steps = oldSteps.length > 1 ? oldSteps.slice(1) : [{ ...welcome }];

    this.setState({ steps });
  };

  handleChangeSteps = (steps, numTests) => {
    this.setState({ steps, numTests });
  };
}

export default App;
