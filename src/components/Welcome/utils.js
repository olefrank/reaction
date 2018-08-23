import { welcome, testwrap, summary } from "../App/App";

export const getSteps = numTests => {
  // new steps list start with WelcomePage
  const steps = [welcome];

  // add Test steps
  for (let i = 0; i < numTests; i++) {
    steps.push({ ...testwrap, id: i + 1 });
  }

  // finish with SummaryPage
  steps.push(summary);

  return steps;
};
