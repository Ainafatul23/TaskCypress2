/// <reference types="cypress" />

describe('Login/Logout test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include','online-banking.html')
        cy.get('h1').should('be.visible')
        cy.get('#account_summary_link').should('be.visible')
        cy.get('#pay_bills_link').should('be.visible')
        cy.get('#account_activity_link').should('be.visible')
        cy.get('#money_map_link').should('be.visible')
        cy.get('#transfer_funds_link').should('be.visible')
        cy.get('#online_statements_link').should('be.visible')
    });

    it('Should display feedback content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include','feedback.html')
        cy.get('h3').should('be.visible')
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include','index.html')
        cy.get('#nav').should('be.visible')
    });

});