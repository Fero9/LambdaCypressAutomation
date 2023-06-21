beforeEach(() => {
    cy.visit('https://www.lambdatest.com/selenium-playground/')
    cy.contains('Download File Demo').click()
  })

  describe('Download file test', () => {
    it('Downloads a file', () => {
        cy.get('.btn').click()
    })
  })