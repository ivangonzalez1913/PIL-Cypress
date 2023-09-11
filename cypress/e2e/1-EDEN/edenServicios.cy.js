/// <reference types="cypress" />

describe("TEST SERVICIOS", () => {
  beforeEach(() => {
    cy.visit("https://www.edenentradas.com.ar/sitio/contenido/inicio");
  });
  it("Verificar servicio de inicio", () => {
    cy.request({
      method: "GET",
      url: "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/inicio",
    }).then((response) => {
      cy.writeFile(`cypress/fixtures/autogenerado/eventos.json`, response.body);
      expect(response.status).to.eq(200);
    });
  });
  it("Validar schema eventos", () => {
    cy.callServiceCheck(
      "GET",
      "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/inicio",
      "eventos_schema",
      "eventos"
    );
  });

  it("Verificar servicio de cuartetos", () => {
    cy.request({
      method: "GET",
      url: "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/eventos/cuartetos",
    }).then((response) => {
      cy.writeFile(
        `cypress/fixtures/autogenerado/cuartetos.json`,
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Validar schema cuartetos", () => {
    cy.callServiceCheck(
      "GET",
      "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/eventos/cuartetos",
      "cuartetos_schema",
      "cuartetos"
    );
  });
  it.only("Verificar servicio de festivales", () => {
    cy.request({
      method: "GET",
      url: "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/eventos/festivales",
    }).then((response) => {
      cy.writeFile(
        `cypress/fixtures/autogenerado/festivales.json`,
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it.only("Validar schema festivales", () => {
    cy.callServiceCheck(
      "GET",
      "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/eventos/festivales",
      "festivales_schema",
      "festivales"
    );
  });
});
