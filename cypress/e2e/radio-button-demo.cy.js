beforeEach(() => {
    cy.visit('https://www.lambdatest.com/selenium-playground/')
    cy.contains('Radio Buttons Demo').click()
  })

describe('Radio button tests', () => {
it('Gets the value of the selected radio button', () => {
    cy.get('.px-10 > .mr-20 > .mr-10').click()
    cy.get('#buttoncheck').click()
    cy.get('.px-10 > .text-size-15').should('exist').and('contain','Male')

    cy.get('.px-10 > :nth-child(3) > .mr-10').click()
    cy.get('#buttoncheck').click()
    cy.get('.px-10 > .text-size-15').should('exist').and('contain','Female')
})

it('Tests the disabled checkboxes', () => {
    cy.get('[type="radio"]').check('Checkbox1').should('be.checked')
    cy.get('[type="radio"]').check('Checkbox2').should('be.checked')
    cy.get(':nth-child(4) > .text-size-16 > .mr-10').should('have.value','Checkbox3').and('be.disabled')
    /*
    cy.contains('Checkbox 1').click()
    cy.contains('Checkbox 1').should('be.checked')
    cy.contains('Checkbox 2').click().should('be.enabled')
    cy.contains('Disabled Checkbox').should('be.disabled')
    */
})

it('Tests the gender and age', () => {
    //0 - 5
    cy.get(':nth-child(2) > :nth-child(2) > .mr-10').click()
    cy.get('.mt-20 > :nth-child(2) > .mr-10').click()
    cy.contains('Get values').click()
    cy.get('.genderbutton').should('contain', 'Male')
    cy.get('.groupradiobutton').should('contain', '0 - 5')

    cy.get(':nth-child(2) > :nth-child(3) > .mr-10').click()
    cy.contains('Get values').click()
    cy.get('.genderbutton').should('contain', 'Female')
    cy.get('.groupradiobutton').should('contain', '0 - 5')

    cy.get(':nth-child(2) > :nth-child(4) > .mr-10').click()
    cy.contains('Get values').click()
    cy.get('.genderbutton').should('contain', 'Other')
    cy.get('.groupradiobutton').should('contain', '0 - 5')
    //5 - 15
    cy.get(':nth-child(2) > :nth-child(2) > .mr-10').click()
    cy.get('.mt-20 > :nth-child(3) > .mr-10').click()
    cy.contains('Get values').click()
    cy.get('.genderbutton').should('contain', 'Male')
    cy.get('.groupradiobutton').should('contain', '5 - 15')

    cy.get(':nth-child(2) > :nth-child(3) > .mr-10').click()
    cy.contains('Get values').click()
    cy.get('.genderbutton').should('contain', 'Female')
    cy.get('.groupradiobutton').should('contain', '5 - 15')

    cy.get(':nth-child(2) > :nth-child(4) > .mr-10').click()
    cy.contains('Get values').click()
    cy.get('.genderbutton').should('contain', 'Other')
    cy.get('.groupradiobutton').should('contain', '5 - 15')
    //15 - 50
    cy.get(':nth-child(2) > :nth-child(2) > .mr-10').click()
    cy.get('.mt-20 > :nth-child(4) > .mr-10').click()
    cy.contains('Get values').click()
    cy.get('.genderbutton').should('contain', 'Male')
    cy.get('.groupradiobutton').should('contain', '15 - 50')

    cy.get(':nth-child(2) > :nth-child(3) > .mr-10').click()
    cy.contains('Get values').click()
    cy.get('.genderbutton').should('contain', 'Female')
    cy.get('.groupradiobutton').should('contain', '15 - 50')

    cy.get(':nth-child(2) > :nth-child(4) > .mr-10').click()
    cy.contains('Get values').click()
    cy.get('.genderbutton').should('contain', 'Other')
    cy.get('.groupradiobutton').should('contain', '15 - 50')
})


})