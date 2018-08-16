/// <reference types="Cypress" />

describe("Complete game flow", () => {
  it("should have a welcome screen", () => {
    cy.visit("http://localhost:3000");

    // title text
    cy.get("[data-e2e=welcome-title]").should("contain", "Welcome");

    // go to next page
    cy.get("[data-e2e=start-button]").click();
  });

  it("should have a correct element pr test", () => {
    const numTests = 5;
    const introDelay = 3000;
    for (let i = 0; i < numTests; i++) {
      // wait for introduction text
      cy.wait(introDelay);
      cy.get("[data-e2e=correct-element]").click();
    }
  });

  it("should have a welcome screen with 6 results", () => {
    // title text
    cy.get("[data-e2e=summary-title]").should("contain", "Summary");

    // results
    cy.get("[data-e2e=summary-results]")
      .children()
      .should("have.length", 6);
  });
});
