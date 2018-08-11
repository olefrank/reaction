import React, { Component } from "react";
import "./GameContainer.css";

class GameContainer extends Component {
  render() {
    const { children } = this.props;

    return <div className="GameContainer">{children}</div>;
  }
}

export default GameContainer;
