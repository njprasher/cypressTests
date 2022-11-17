describe('Check Home', () => {
    it('passes', () => {
      cy.visit('https://master.hiring-assignment.qa.c66.me/')
      
    })
    it('Click on Home', () => {
        cy.get('a[href="/"]').click();
    });

  })