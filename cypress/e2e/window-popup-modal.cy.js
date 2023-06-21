beforeEach(() => {
    cy.visit('https://www.lambdatest.com/selenium-playground/')
    cy.contains('Window Popup Modal').click()
  })

  describe('Window Popup Modal tests', () => {
    it.only('tests the window popup modals', () => {
      
     
        cy.get(':nth-child(1) > .mt-30 > :nth-child(1) > .bg-lambda-900').invoke('removeAttr', 'target').click()
        cy.get(':nth-child(1)').should('contain', 'LamdaTest')
    })

    it('tests the enter any url', () => {
      cy.get('.container > :nth-child(1) > :nth-child(2) > div > .w-full').type('https://www.google.co.uk/')
      cy.get('.container > :nth-child(1) > :nth-child(2) > div > .bg-lambda-900').click()
    })

    it('tests the multiple window popup modals', () => {
      
    })
  })