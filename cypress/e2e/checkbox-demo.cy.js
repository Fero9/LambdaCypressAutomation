beforeEach(() => {
    cy.visit('https://www.lambdatest.com/selenium-playground/')
    cy.contains('Checkbox Demo').click()
  })

describe('All of the Checkbox tests', () => {
it('Selects/deselects the checkbox', () => {
    cy.get('#isAgeSelected').click()
    cy.get('#isAgeSelected').should('be.checked')

    cy.get('#txtAge').should('be.visible')
                     .and('contain', 'Checked')

    cy.get('#isAgeSelected').click()
    cy.get('#isAgeSelected').should('not.be.checked')
})

it('Tests the disabled checkboxes', () =>{
  cy.get(':nth-child(2) > :nth-child(1) > .mr-10').should('be.enabled')
  cy.get(':nth-child(2) > :nth-child(2) > .mr-10').should('be.enabled')
  cy.get(':nth-child(2) > :nth-child(3) > .mr-10').should('be.disabled')
  cy.get(':nth-child(2) > :nth-child(4) > .mr-10').should('be.disabled')

  cy.get(':nth-child(2) > :nth-child(1) > .mr-10').click().should('be.checked')
  cy.get(':nth-child(2) > :nth-child(2) > .mr-10').click().should('be.checked')
})

it('Selects/deselects all of the options', () =>{
  cy.get('#box').click()
  cy.get('#ex1-check1').should('be.checked')
  cy.get('#ex1-check2').should('be.checked')
  cy.get(':nth-child(3) > #ex1-check3').should('be.checked')
  cy.get(':nth-child(4) > #ex1-check3').should('be.checked')

  cy.get('#box').click()
  cy.get('#ex1-check1').should('not.be.checked')
  cy.get('#ex1-check2').should('not.be.checked')
  cy.get(':nth-child(3) > #ex1-check3').should('not.be.checked')
  cy.get(':nth-child(4) > #ex1-check3').should('not.be.checked')
})
})