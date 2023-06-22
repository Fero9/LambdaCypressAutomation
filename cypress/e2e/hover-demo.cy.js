beforeEach(() => {
    cy.visit('https://www.lambdatest.com/selenium-playground/')
    cy.contains('Hover Demo').click()
  })

  describe('Hover Demo Tests', () => {
    it('hovers over the first two buttons', () => {
        cy.get('.bg-green-100').trigger('mouseover')

        cy.get('.bg-green-100').invoke('show').click();
        cy.get('.bg-green-100').click({ force: true });

        cy.get('.m-15 > img').trigger('mouseover')
        cy.get('.m-15 > img').invoke('show').click();
        cy.get('.m-15 > img').click({ force: true });
        cy.get('#__next > section.mt-50 > div > div > div > div > div > div > div > div.s__column.m-15 > p').should('exist')
    })
  })