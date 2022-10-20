describe('example to-do app', () => {
  beforeEach(() => {
      cy.visit('https://demo.guru99.com/test/newtours/')
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
  it('booking', () => {
      cy.Booking('One way','4','Paris','September','Sydney','December','First class','Unified Airlines')
  })
})