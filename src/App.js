import React, { Component } from "react";
import GameContainer from "./components/GameContainer/GameContainer";
import Test from "./components/Test/Test";
import { roundDecimals } from "./utils";
import "./App.css";

class App extends Component {
  state = {
    shapes: ["Circle", "Square", "Star", "Penta", "Hexa"],
    results: []
  };
  render() {
    const { shapes } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Reaction</h1>
        </header>
        <GameContainer>
          <Test step={1} shapes={shapes} addResult={this.addResult} />
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
    const rounded = roundDecimals(result.time / 1000);
    console.log(`Clicked ${result.step} in ${rounded} secs`);
  };
}

export default App;
