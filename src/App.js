import React, { Component } from "react";
import GameContainer from "./components/GameContainer/GameContainer";
import Test from "./components/Test/Test";
import "./App.css";

class App extends Component {
  state = {
    results: []
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Reaction</h1>
        </header>
        <GameContainer>
          <Test
            numSteps={5}
            addResult={this.addResult}
            onAppContinue={this.onAppContinue}
          />
        </GameContainer>
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
    console.log(this.state.results);
  };
}

export default App;
