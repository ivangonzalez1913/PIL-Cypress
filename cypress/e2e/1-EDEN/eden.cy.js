/// <reference types="cypress" />

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
})