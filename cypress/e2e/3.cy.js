describe('example to-do app', () => {
  beforeEach(() => {
      cy.visit('https://demo.guru99.com/test/newtours/')
  })

  Cypress.Commands.add('LogIn', (username, password) => {
    cy.get(':nth-child(2) > [width="112"] > input').type(username)
    cy.get(':nth-child(3) > [width="112"] > input').type(password)
    cy.get('div > input').click()
  })
  it('login', () => {
  cy.LogIn('tutorial','tutorial')
  })
})