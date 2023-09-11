/// <reference types="cypress" />
class EdenHome{
    getSubtitles(){
        return cy.get("h5");

    }
}

export default new EdenHome