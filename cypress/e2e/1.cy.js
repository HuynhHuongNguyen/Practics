describe('example to-do app', () => {
  beforeEach(() => {
      cy.visit('https://demo.guru99.com/test/newtours/')
  })


  it('login', () => {
      const input = 'tutorial'
      cy.get(':nth-child(2) > [width="112"] > input').type(input).should('have.value', input)
      cy.get(':nth-child(3) > [width="112"] > input').type(input).should('have.value', input)

      cy.get('div > input').click()
  })
})