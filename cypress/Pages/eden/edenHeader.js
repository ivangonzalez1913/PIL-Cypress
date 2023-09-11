class EdenHeader{
    getMenuButtons(){
        return cy.get("#navbar a");

    }
    getEdenIcon(){
        return cy.get("#header-logo")
    }
}

export default new EdenHeader