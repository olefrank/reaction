import { welcome, test, summary } from "../../App";

export const getSteps = numTests => {
  // new steps list start with WelcomePage
  const steps = [welcome];

  // add Test steps
  for (let i = 0; i < numTests; i++) {
    steps.push({ ...test, id: i + 1 });
  }

  // finish with SummaryPage
  steps.push(summary);

  return steps;
};
