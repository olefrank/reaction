import React, { Component } from "react";
import GameContainer from "./components/GameContainer/GameContainer";
import Test from "./components/Test/Test";
import Welcome from "./components/Welcome/Welcome";
import Summary from "./components/Summary/Summary";
import AppHeader from "./components/AppHeader/AppHeader";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage
} from "./utils/localstorage";
import "./App.css";

const allSteps = ["Welcome", "Game", "Summary"];

class App extends Component {
  state = {
    steps: [...allSteps],
    results: []
  };

  render() {
    const { steps, results } = this.state;
    const currentStep = steps[0];

    return (
      <div className="App">
        <AppHeader step={currentStep} results={results} countdown={1} />
        <GameContainer>{this.renderAppSteps(currentStep)}</GameContainer>
      </div>
    );
  }

  componentDidMount() {
    // hydrate state from LS
    const loadedState = loadStateFromLocalStorage(this.state);
    this.setState({ ...loadedState });

    // save state to LS before unload
    window.addEventListener("beforeunload", () => {
      saveStateToLocalStorage(this.state);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", () => {
      saveStateToLocalStorage(this.state);
    });

    // saves if component has a chance to unmount
    saveStateToLocalStorage(this.state);
  }

  /**
   * Add result to list of results
   * @param {number} result object consisting of {step, time}
   */
  addResult = result => {
    this.setState({ results: [...this.state.results, result] });
  };

  /**
   * Navigate to next step in App
   */
  onAppContinue = () => {
    const { steps } = this.state;
    // remove current step from list of steps
    const nextSteps = steps.length > 0 ? steps.slice(1) : [];
    this.setState({ steps: nextSteps });
  };

  /**
   * Restart App
   */
  onAppRestart = () => {
    this.setState({ steps: [...allSteps], results: [] });
  };

  renderAppSteps = step => {
    const { results } = this.state;

    switch (step) {
      case "Game":
        return (
          <Test
            testIndex={results.length + 1}
            numTests={5}
            addResult={this.addResult}
            onAppContinue={this.onAppContinue}
          />
        );
      case "Summary":
        return <Summary results={results} onClick={this.onAppRestart} />;

      default:
        return <Welcome onClick={this.onAppContinue} />;
    }
  };
}

export default App;
