import React, { Component } from "react";
import GameContainer from "./components/GameContainer/GameContainer";
import Test from "./components/Test/Test";
import Welcome from "./components/Welcome/Welcome";
import Summary from "./components/Summary/Summary";
import "./App.css";

const allSteps = ["Welcome", "Game", "Summary"];
const lsNamespace = "reaction";

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

  componentDidMount() {
    // hydrate state from LS
    this.hydrateStateWithLocalStorage();

    // save state to LS before unload
    window.addEventListener("beforeunload", this.saveStateToLocalStorage);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.saveStateToLocalStorage);

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  /**
   * Hydrate state from Local Storage
   */
  hydrateStateWithLocalStorage = () => {
    let lsData;

    if (localStorage.hasOwnProperty(lsNamespace)) {
      lsData = localStorage.getItem(lsNamespace);
    }

    // parse to json object
    lsData = JSON.parse(lsData);

    for (let key in this.state) {
      if (lsData && lsData.hasOwnProperty(key)) {
        let value = lsData[key];

        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  };

  /**
   * Save state to local storage
   */
  saveStateToLocalStorage = () => {
    let lsData = {};

    for (let key in this.state) {
      lsData[key] = this.state[key];
    }

    localStorage.setItem(lsNamespace, JSON.stringify(lsData));
  };

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
   * Todo: rename 'onTestRestart' + re-write to make more readable
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
            stepIndex={results.length + 1}
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
