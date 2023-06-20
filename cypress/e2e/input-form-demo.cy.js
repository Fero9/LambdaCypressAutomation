beforeEach(() => {
    cy.visit('https://www.lambdatest.com/selenium-playground/')
    cy.contains('Input Form Submit').click()
  })

  describe('All of the Input Form Demo tests', () => {
    it('Populates the entire form', () => {
        cy.get('#name').type('Frantisek')
        cy.get('#inputEmail4').type('qtester144+062023@gmail.com')
        cy.get('#inputPassword4').type('valid11Password')
        cy.get('#company').type('Alas')
        cy.get('#websitename').type('https://www.alasdoo.com/')
        cy.get(':nth-child(3) > .pr-20 > .w-full').select('Serbia')
        cy.get('#inputCity').type('Novi Sad')
        cy.get('#inputAddress1').type('Rudjera Boskovica 20')
        cy.get('#inputAddress2').type('No')
        cy.get('#inputState').type('Novi Sad')
        cy.get('#inputZip').type('21000')
        cy.get('.bg-lambda-900').click()
        
        cy.get('.text-gray-900').should('contain','Input form validations')
        cy.get('.success-msg').should('contain','Thanks for contacting us, we will get back to you shortly.')
    })
  })