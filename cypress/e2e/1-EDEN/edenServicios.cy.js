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
  it.only("Validar schema", () => {
    cy.callServiceCheck(
      "GET",
      "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/inicio",
      "eventos_schema",
      "eventos"
    );
  });
});
