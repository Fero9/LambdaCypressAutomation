beforeEach(() => {
    cy.visit('https://www.lambdatest.com/selenium-playground/')
  })

describe('All of the Checkbox tests', () => {
it('Enters a message inside the "Enter Message" field', () => {
    cy.contains('Checkbox Demo').click()

})

})