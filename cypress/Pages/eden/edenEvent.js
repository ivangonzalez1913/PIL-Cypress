class EdenEvent{
    getEventTitle(){
        return cy.get(".fechas-funciones span");

    }
}

export default new EdenEvent