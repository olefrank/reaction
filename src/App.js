import React, { Component } from "react";
import GameContainer from "./components/GameContainer/GameContainer";
import Test from "./components/Test/Test";
import "./App.css";

class App extends Component {
  state = {
    shapes: ["Circle", "Square", "Star", "Penta", "Hexa"]
  };
  render() {
    const { shapes } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Reaction</h1>
        </header>
        <GameContainer>
          <Test step={1} shapes={shapes} />
        </GameContainer>
      </div>
    );
  }
}

export default App;
