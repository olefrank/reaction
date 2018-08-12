import React, { Component } from "react";
import AppHeader from "../AppHeader/AppHeader";
import Test from "../Test/Test";
import Welcome from "../Welcome/Welcome";
import Summary from "../Summary/Summary";
import { withAppContext } from "../../contexts";
import { allSteps } from "../../App";
import "./AppContainer.css";

class AppContainer extends Component {
  render() {
    return (
      <div className="AppContainer">
        <AppHeader />
        {this.renderAppSteps()}
      </div>
    );
  }

  /**
   * Render current app step (from 'steps' queue)
   */
  renderAppSteps = () => {
    const { context } = this.props;
    const { results } = context;

    switch (context.steps[0]) {
      case "Game":
        return (
          <Test
            numTests={5}
            addResult={context.addResult}
            onAppContinue={this.onAppContinue}
          />
        );
      case "Summary":
        return <Summary results={results} onClick={this.onAppRestart} />;

      default:
        return <Welcome onClick={this.onAppContinue} />;
    }
  };

  /**
   * Navigate to next app step
   */
  onAppContinue = () => {
    const { context } = this.props;
    const { steps } = context;

    // remove current step from list of steps
    // if empty -> restart
    const remainingSteps = steps.length > 0 && steps.slice(1);

    this.setState({ steps: remainingSteps }, context.setSteps(remainingSteps));
  };

  /**
   * Restart App
   */
  onAppRestart = () => {
    this.setState({ steps: [...allSteps] }, this.props.context.restartApp());
  };
}

export default withAppContext(AppContainer);
