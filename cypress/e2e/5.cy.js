describe('example to-do app', () => {
  beforeEach(() => {
      cy.visit('https://demo.guru99.com/test/newtours/')
  })
  it('acc-booking', () => {
      cy.LogIn('tutorial','tutorial')
      cy.Booking('One way','4','Paris','September','Sydney','December','First class','Unified Airlines')
  })
})
