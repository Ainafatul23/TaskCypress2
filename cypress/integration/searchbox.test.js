/// <reference types="cypress" />

describe('Searchbox Test', function(){
    before(() => {
        cy.visit('http://zero.webappsecurity.com/')
    });

    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('bank{enter}')
    });


    it('Should type into search result page', () => {
        cy.get('h2').contains('Search Results:')
        cy.get('a').contains('Zero - Personal Banking - Loans - Credit Cards')
        cy.get('a').contains('Zero - Free Access to Online Banking')
    });
});