import React, { Component } from "react";
import AppContainer from "./components/AppContainer/AppContainer";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage
} from "./utils/localstorage";
import { AppContext } from "./contexts";
import "./App.css";

const allSteps = ["Welcome", "Game", "Summary"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      steps: [...allSteps],
      currentTestIndex: 1,
      addResult: result =>
        this.setState({ results: [...this.state.results, result] }),
      setCurrentTestIndex: currentTestIndex =>
        this.setState({ currentTestIndex }),
      restartApp: () => {
        this.setState({
          results: [],
          steps: [...allSteps],
          currentTestIndex: 1
        });
      },
      setSteps: steps => this.setState({ steps })
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <AppContainer />
        </div>
      </AppContext.Provider>
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
}

export default App;
