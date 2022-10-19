describe('My First Test', function() {
  it('Search on amazon', function() {
    cy.viewport(2440,1200)
    cy.visit('https://www.amazon.com/')
    cy.get('#twotabsearchtextbox').type('Superman')
    cy.get('#nav-search-submit-button').click()
    // cy.get('span.a-color-state').contains('Superman')
  })
})