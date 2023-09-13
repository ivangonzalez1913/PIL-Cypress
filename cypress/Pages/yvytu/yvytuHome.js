/// <reference types="cypress" />
class YvytuHome {
  getNavButtons() {
    return cy.get("nav div a");
  }
  getCurrentImageBanner() {
    return cy.get(
      `[class^="w-full h-600 bg-[url('/public/images/header-gallery/"][class*="slick-current"]`
    );
  }

  getImgButton() {
    return cy.get("ul").first().find("li button");
  }
}
export default new YvytuHome();
