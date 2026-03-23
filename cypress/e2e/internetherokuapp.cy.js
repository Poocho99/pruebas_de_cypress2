describe('Pruebas pagina herokuapp', () => {
  it('Clicar Form authentication e iniciar sesion',() => {
  cy.visit('https://the-internet.herokuapp.com/')
  cy.get(':nth-child(21) > a').click()
  cy.get('#username').type("tomsmith")
  cy.get('#password').type("SuperSecretPassword!{enter}")

  })


















})