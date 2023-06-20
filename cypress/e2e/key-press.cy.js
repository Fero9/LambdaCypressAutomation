beforeEach(() => {
    cy.visit('https://www.lambdatest.com/selenium-playground/')
    cy.contains('Key Press').click()
  })

  describe('All of the Key Press tests', () => {
    it('Tests which key has been pressed', () => {
        cy.get('#my_field')
    })
  })