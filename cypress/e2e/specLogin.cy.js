import testData from '../fixtures/testData.json';
describe('Check Login', () => {

    before(function () {

    })

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

})