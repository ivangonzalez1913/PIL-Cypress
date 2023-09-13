class EdenEvent {
  getEventTitle() {
    return cy.get(".fechas-funciones span");
  }
  getCalendarTitle() {
    return cy.get(".ui-datepicker-title");
  }
  getCalendarTable() {
    return cy.get(".ui-datepicker-calendar");
  }
}

export default new EdenEvent();
