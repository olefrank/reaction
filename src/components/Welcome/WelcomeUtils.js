import { welcome, introduction, testwrap, summary } from "../App/App";

export const getSteps = numTests => {
  // new steps list start with WelcomePage
  const steps = [welcome];

  // add Test steps
  for (let i = 0; i < numTests; i++) {
    const id = i + 1;
    steps.push({ ...introduction, id });
    steps.push({ ...testwrap, id });
  }

  // finish with SummaryPage
  steps.push(summary);

  return steps;
};
