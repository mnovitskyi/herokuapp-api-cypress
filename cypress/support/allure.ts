import "@shelex/cypress-allure-plugin";

export const logStep = (message: string, isParent: boolean = false) => {
  if (Cypress.env("allure")) {
    cy.allure().step(message, isParent);
  }
};
