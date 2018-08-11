import React, { Component } from "react";
import GameContainer from "./components/GameContainer/GameContainer";
import Test from "./components/Test/Test";
import Welcome from "./components/Welcome/Welcome";
import Summary from "./components/Summary/Summary";
import "./App.css";

const allSteps = ["Welcome", "Game", "Summary"];

class App extends Component {
  state = {
    steps: [...allSteps],
    results: []
  };
  render() {
    const { steps } = this.state;
    const currentStep = steps[0];

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Reaction</h1>
        </header>
        <GameContainer>{this.renderAppSteps(currentStep)}</GameContainer>
      </div>
    );
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
    const nextSteps = steps.length > 0 ? steps.slice(1) : [];
    this.setState({ steps: nextSteps });
  };

  /**
   * Restart Test
   */
  onAppRestart = () => {
    this.setState({ steps: [...allSteps].slice(1), results: [] });
  };

  renderAppSteps = step => {
    const { results } = this.state;

    switch (step) {
      case "Game":
        return (
          <Test
            numSteps={5}
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
