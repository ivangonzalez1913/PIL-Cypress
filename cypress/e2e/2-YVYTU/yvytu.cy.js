/// <reference types="cypress" />

import yvytuHome from "../../Pages/yvytu/yvytuHome";

describe("TEST PAGINA YVYTU", () => {
  beforeEach(() => {
    cy.visit("https://vientosdelaselva.com.ar/");
  });
  it("Verificar botones barra de navegacion", () => {
    const buttons = [
      "",
      "LA RESERVA",
      "CABAÑA",
      "COMO LLEGAR",
      "CONTACTO",
      "DONÁ",
    ];
    yvytuHome.getNavButtons().each((el, inx) => {
      cy.wrap(el).should("contain.text", buttons[inx]);
    });
  });
  it("Verificar Imágenes del Banner Principal", () => {
    const bannerList = ["01.png", "02.png", "03.png", "04.png"];

    bannerList.forEach((banner, inx) => {
      yvytuHome
        .getCurrentImageBanner()
        .should(
          "have.class",
          `bg-[url('/public/images/header-gallery/${banner}')]`
        );

      yvytuHome
        .getImgButton()
        .its("length")
        .then((cantidad) => {
          if (cantidad != inx + 1) {
            yvytuHome
              .getImgButton()
              .eq(inx + 1)
              .click();
            cy.wait(1000);
          }
        });
    });
  });
});
