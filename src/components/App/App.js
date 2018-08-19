import React, { Component } from "react";
import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";
import Summary from "../Summary/Summary";
import Test from "../Test/Test";
import withNext from "./withNext";
import { AppContext } from "./AppContext";

import "./App.css";

// all steps
export const welcome = { name: "welcome", component: Welcome };
export const test = { name: "test", component: Test, id: 1 };
export const summary = { name: "summary", component: Summary };

class App extends Component {
  initialState = {
    results: [],
    steps: [welcome, test, summary],
    numTests: 1
  };

  constructor(props) {
    super(props);
    this.state = { ...this.initialState };
  }

  render() {
    const { steps } = this.state;
    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <Header />
          {steps.length && this.renderStep()}
        </div>
      </AppContext.Provider>
    );
  }

  renderStep = () => {
    // all steps
    const { steps, numTests, results } = this.state;

    // current step
    const { name, component, id } = steps[0];
    const Component = withNext(component, this.handleNext);

    switch (name) {
      case "test":
        return <Component id={id} addResult={this.addResult} numElements={5} />;
      case "welcome":
        return (
          <Component
            onChangeSteps={this.handleChangeSteps}
            numTests={numTests}
          />
        );
      default:
        return <Component results={results} />;
    }
  };

  handleNext = e => {
    const { steps: oldSteps } = this.state;

    // get next step
    if (oldSteps.length > 1) {
      const steps = oldSteps.slice(1);
      this.setState({ steps });
    }
    // reset state
    else {
      this.setState({ ...this.initialState });
    }
  };

  handleChangeSteps = (steps, numTests) => {
    this.setState({ steps, numTests });
  };

  addResult = result => {
    this.setState({ results: [...this.state.results, result] });
  };
}

export default App;
