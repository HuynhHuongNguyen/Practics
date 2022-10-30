// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('LogIn', (username, password) => {
  cy.get('input[name="userName"]').type(username)
  cy.get('input[name="password"]').type(password)
  cy.get('input[name="submit"]').click()
})

Cypress.Commands.add('Booking', (Type, Passengers, Departing, On, Arriving, Returning, Service, Airline) => {
  cy.get('a[href="reservation.php"]').click()
  cy.get(`[value="${Type}"]`).check(Type)
  cy.get('select[name="passCount"]').select(Passengers)
  cy.get('select[name="fromPort"]').select(Departing)
  cy.get('select[name="fromMonth"]').select(On)
  cy.get('select[name="toPort"]').select(Arriving)
  cy.get('select[name="toMonth"]').select(Returning)
  cy.get(`[value="${Service}"]`).click()
  cy.get('select[name="airline"]').select(Airline)
  cy.get('input[name="findFlights"]').click()
})