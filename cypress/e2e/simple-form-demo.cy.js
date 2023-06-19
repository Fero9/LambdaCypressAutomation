beforeEach(() => {
  cy.visit('https://www.lambdatest.com/selenium-playground/')
})

describe('All of the Simple Form Demo tests', () => {
  it('Enters a message inside the "Enter Message" field', () => {
    cy.contains('Simple Form Demo').click()

    //Change this so that it's not hard coded
    cy.get('.w-8\\/12 > #user-message').click().type("This is a cypress test")
    cy.get('#showInput').click()
    cy.get('#message').should('have.text', 'This is a cypress test')
  })

  it('Checks the sum of the two fields', () => {
    cy.contains('Simple Form Demo').click()
    cy.get('#sum1').type(10)
    cy.get('#sum2').type(20)
    cy.get('#gettotal > .bg-lambda-900').click()

    cy.get('#addmessage').should('have.text', `${30}`)
  })
})