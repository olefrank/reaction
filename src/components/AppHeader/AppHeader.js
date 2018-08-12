import React from "react";
import { withAppContext } from "../../contexts";
import "./AppHeader.css";

const AppHeader = ({ context }) => {
  const currentStep = context.steps[0];
  return (
    <header className="AppHeader">
      <h1 className="AppHeader__step">
        {currentStep === "Game" && `#${context.currentTestIndex}`}
      </h1>
      <h1 className="AppHeader__title">Reaction</h1>
      <h1 className="AppHeader__countdown"> </h1>
    </header>
  );
};

export default withAppContext(AppHeader);
