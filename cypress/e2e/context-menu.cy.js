beforeEach(() => {
    cy.visit('https://www.lambdatest.com/selenium-playground/')
    cy.contains('Context Menu').click()
  })

  describe('Context Menu Tests', () => {
    it('Clicks inside the div and triggers a JS alert', () => {
        cy.get('#hot-spot').rightclick()
        //This does not seem to work in cypress
    })
  })