import testData from '../fixtures/testData.json';
describe('Check Login Page', () => {
    it('Website is up', () => {
        cy.visit('https://master.hiring-assignment.qa.c66.me/')
    })
    it('Click on Login', () => {
        cy.get('a[href="/login"]').click();
    });
    it('Enter Email', () => {
        cy.get('#email').type(testData.username)
    });
    it('Check Email entered', () => {
        cy.get('#email').should('have.value', testData.username)
    });
    it('Enter Password', () => {
        cy.get('input[name=password]').type(testData.password)
    });
    it('Check Password entered', () => {
        cy.get('input[name=password]').should('have.value', testData.password)
    });
    it('Submit Login', () => {
        cy.get('input[name=submit]').click()
    });
    it('Check Logout Success', () => {
        cy.get('a[href="#"]').click()
    });
})