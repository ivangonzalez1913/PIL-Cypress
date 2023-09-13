/// <reference types="cypress" />

const edenEvent = require("../../Pages/eden/edenEvent");
const edenHeader = require("../../Pages/eden/edenHeader");
const edenHome = require("../../Pages/eden/edenHome");
const utils = require("../../Pages/utils");

describe("TEST PAGINA EDEN", () => {
  beforeEach(() => {
    cy.visit("https://www.edenentradas.com.ar/");
  });
  it("Verificar subtitulos", () => {
    edenHome.getSubtitles().first().should("contain.text", "BUSCAR EVENTO");
    edenHome
      .getSubtitles()
      .last()
      .should("contain.text", "CALENDARIO DE EVENTO");
  });

  it("Verificar botones navegacion", () => {
    const menuButtons = [
      "HOME",
      "TODOS",
      "AGENDA DEL FINDE",
      "RECITALES",
      "TEATROS",
      "CUARTETOS",
      "FESTIVALES",
      "SALAS",
    ];
    edenHeader.getMenuButtons().each((el, inx) => {
      cy.wrap(el).should("contain.text", menuButtons[inx]);
    });
  });

  it("Verificar logo", () => {
    const imgSrc = "https://static.edenentradas.com.ar/sitio/images/logo.gif";
    edenHeader
      .getEdenIcon()
      .should("be.visible")
      .and("have.prop", "naturalHeight")
      .and("be.greaterThan", 0);
    edenHeader.getEdenIcon().should("have.attr", "src", imgSrc);
    edenHeader.getEdenIcon().should("have.attr", "alt");
  });

  it("Verificar busqueda", () => {
    edenHome.getSearchInput().type("Creepy Halloween");
    edenHome.getSearchSuggestion().first().click();
    edenEvent
      .getEventTitle()
      .should("contain.text", "Creepy Halloween/ La Mona Jimenez");
  });

  it("Verificar botones footer", () => {
    const footerButtons = [
      "TERMINOS DE USO",
      "QUIENES SOMOS",
      "PUNTOS DE VENTA",
      "CONTACTENOS",
      "\n                                Arrepentimiento de Compra\n  ",
    ];
    edenHome.getFooterButtons().each((el, inx) => {
      cy.wrap(el).should("contain.text", footerButtons[inx]);
    });
  });
  it("Verificar botones redes", () => {
    cy.validarFooterButtons(
      "#social-fb",
      "https://www.facebook.com/edenentradas"
    );
    cy.validarFooterButtons(
      "#social-tw",
      "https://twitter.com/#!/edenentradas"
    );
    cy.validarFooterButtons(
      "#social-gp",
      "https://www.instagram.com/edenentradas/"
    );
    cy.validarFooterButtons("#social-em", "mailto:info@edenentradas.com.ar");
    cy.validarFooterButtons(
      "#social-wa",
      "//api.whatsapp.com/send?phone=5493516562003"
    );
  });
  it("Verificar calendario", () => {
    const [dia, mes, year] = utils.getDate();
    edenEvent.getCalendarTitle().should("contain.text", mes);
    edenEvent.getCalendarTitle().should("contain.text", year);
    edenEvent
      .getCalendarTable()
      .find("td")
      .each((cuadradoDia, inx) => {
        if (inx < dia) {
          cy.wrap(cuadradoDia).should(
            "have.class",
            "ui-datepicker-unselectable ui-state-disabled"
          );
        }
      });
  });
});
