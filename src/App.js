import React, { Component } from "react";
import GameContainer from "./components/GameContainer/GameContainer";
import Element from "./components/Element/Element";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Reaction</h1>
        </header>
        <GameContainer>
          <Element shape="Square" x={100} y={100} />
        </GameContainer>
      </div>
    );
  }
}

export default App;
