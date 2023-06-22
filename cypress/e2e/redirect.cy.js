beforeEach(() => {
    cy.visit('https://www.lambdatest.com/selenium-playground/')
    cy.contains('Redirect').click()
  })

  describe('Redirection test', () => {
    it('redirects the user to the dashboard', () => {
        cy.get('.text-size-16 > .text-lambda-900').click()
        cy.get('.text-size-50').contains('Selenium Playground')
        cy.url().should('contain','https://www.lambdatest.com/selenium-playground/')
    })
  })