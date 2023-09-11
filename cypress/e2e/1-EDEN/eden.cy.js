/// <reference types="cypress" />

const edenEvent= require("../../Pages/eden/edenEvent");
const edenHeader = require("../../Pages/eden/edenHeader")
const edenHome = require("../../Pages/eden/edenHome")


describe("TEST PAGINA EDEN", ()=>{
  beforeEach(()=>{
    cy.visit("https://www.edenentradas.com.ar/sitio/contenido/inicio")
  });
  it("Verificar subtitulos", ()=>{
    edenHome.getSubtitles().first().should("contain.text", "BUSCAR EVENTO")
    edenHome.getSubtitles().last().should("contain.text", "CALENDARIO DE EVENTO")
  });

  it("Verificar botones navegacion", ()=>{
    const menuButtons = [
      "HOME","TODOS","AGENDA DEL FINDE","RECITALES","TEATROS","CUARTETOS","FESTIVALES","SALAS",
    ]
    edenHeader.getMenuButtons().each((el, inx)=>{
      cy.wrap(el).should("contain.text", menuButtons[inx])
    })
  });

  it("Verificar logo", ()=>{
    const imgSrc = "https://static.edenentradas.com.ar/sitio/images/logo.gif"
    edenHeader.getEdenIcon().should("be.visible").and("have.prop", "naturalHeight").and("be.greaterThan", 0);
    edenHeader.getEdenIcon().should("have.attr", "src", imgSrc );
    edenHeader.getEdenIcon().should("have.attr", "alt");

    });

  it("Verificar busqueda", ()=>{
    edenHome.getSearchInput().type("Creepy Halloween");
    edenHome.getSearchSuggestion().first().click();
    edenEvent.getEventTitle().should("contain.text", "Creepy Halloween/ La Mona Jimenez" );
  })

  it("Verificar botones footer", ()=>{
    const footerButtons = [
      "TERMINOS DE USO",
      "QUIENES SOMOS",
      "PUNTOS DE VENTA",
      "CONTACTENOS",
      "\n                                Arrepentimiento de Compra\n  ",
    ]
    edenHome.getFooter().each((el, inx)=>{
      cy.wrap(el).should("contain.text", footerButtons[inx])
    })
  })

})