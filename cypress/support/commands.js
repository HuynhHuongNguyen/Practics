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
    cy.get(':nth-child(2) > [width="112"] > input').type(username)
    cy.get(':nth-child(3) > [width="112"] > input').type(password)
    cy.get('div > input').click()
  })

  Cypress.Commands.add('Booking', (Type,Passengers,Departing,On,Arriving,Returning,Service,Airline) => {
    cy.get(':nth-child(2) > [width="80"] > a').click()
    if (Type == 'Round Trip'){
      cy.get('[value="roundtrip"]').check('roundtrip')
    } else {
      cy.get('[value="oneway"]').check('oneway')
    }
    cy.get('b > select').select(Passengers)
    cy.get(':nth-child(4) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select').select(Departing)
    cy.get('[name="fromMonth"]').select(On)
    cy.get(':nth-child(6) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select').select(Arriving)
    cy.get('[name="toMonth"]').select(Returning)
    if (Service == 'Economy Class'){
      cy.get(':nth-child(2) > [size="2"] > [checked=""]').click()
    } else{ if (Service == 'Economy Class'){
      cy.get('[value="Business"]').click()
    } else {
      cy.get('[value="First"]').click()
    }
    } 
    cy.get(':nth-child(10) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select').select(Airline)
    cy.get('td > input').click()
  })