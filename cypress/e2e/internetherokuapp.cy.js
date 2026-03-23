describe('Pruebas pagina herokuapp', () => {

  it('Clicar Form authentication e iniciar sesion',() => {
  cy.visit('https://the-internet.herokuapp.com/')
  cy.get(':nth-child(21) > a').click()
  cy.get('#username').type("tomsmith")
  cy.get('#password').type("SuperSecretPassword!{enter}")
  cy.get('.subheader')
  .contains('Welcome to the Secure Area. When you are done click logout below.')
  
  })
  
    it('Shifting Content Menu',() => {
  cy.visit('https://the-internet.herokuapp.com/')
  cy.get(':nth-child(39) > a').click()
  cy.get('[href="/shifting_content/menu"]').click()
  cy.get('li').should('have.length', 5)
  
  })

})