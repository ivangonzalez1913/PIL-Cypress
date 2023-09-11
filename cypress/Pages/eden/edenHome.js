/// <reference types="cypress" />
class EdenHome{
    getSubtitles(){
        return cy.get("h5");

    }
    getSearchInput(){
        return cy.get("#espectaculoList")
    }
    getSearchSuggestion(){
        return cy.get (".ui-menu-item")
    }
    getFooter(){
        return cy.get ("footer nav a")
    }
}

export default new EdenHome