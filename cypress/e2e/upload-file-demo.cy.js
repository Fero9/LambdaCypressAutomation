beforeEach(() => {
    cy.visit('https://www.lambdatest.com/selenium-playground/')
    cy.contains('Upload File Demo').click()
  })

  describe('Upload file test', () => {
    it('Uploads a file', () => {
        cy.get('#file').selectFile("C:/Users/PC/Desktop/webcam-toy-photo2.jpg")
        cy.get('#error').should('contain','File Successfully Uploaded')
    })
  })