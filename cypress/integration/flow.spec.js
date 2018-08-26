/// <reference types="Cypress" />

describe("Complete game flow", () => {
  const numTests = 3;
  const countdown = 3;

  it("should have a welcome screen", () => {
    cy.visit("http://localhost:3000");

    // title text
    cy.get("[data-e2e=welcome-title]").should("contain", "Welcome");

    // go to next page
    cy.get("[data-e2e=start-button]").click();
  });

  it("should have a correct element pr test", () => {
    const introDelay = countdown * 1000;

    for (let i = 0; i < numTests; i++) {
      // wait for introduction text
      cy.wait(introDelay);
      cy.get("[data-e2e=correct]").click();
    }
  });

  it(`should have a summary screen with ${numTests + 1} results`, () => {
    // title text
    cy.get("[data-e2e=summary-title]").should("contain", "Summary");

    // results
    cy.get("[data-e2e=summary-results]")
      .children()
      .should("have.length", numTests + 1);
  });
});
