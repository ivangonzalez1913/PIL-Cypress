class EdenHeader{
    getMenuButtons(){
        return cy.get("#navbar a");

    }
}

export default new EdenHeader