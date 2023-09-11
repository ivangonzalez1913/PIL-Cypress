/// <reference types="cypress" />
class EdenHome {
  getSubtitles() {
    return cy.get("h5");
  }
  getSearchInput() {
    return cy.get("#espectaculoList");
  }
  getSearchSuggestion() {
    return cy.get(".ui-menu-item");
  }
  getFooterButtons() {
    return cy.get("footer nav a");
  }
  getFooterGenericIcon() {
    return cy.get("footer .text-center a i");
  }
}

export default new EdenHome();
