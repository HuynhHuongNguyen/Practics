describe('example to-do app', () => {
  beforeEach(() => {
      cy.visit('https://demo.guru99.com/test/newtours/')
  })

  it('booking', () => {
      cy.get(':nth-child(2) > [width="80"] > a').click()
      cy.get('[value="oneway"]').check('oneway')
      cy.get('b > select').select('3')
      cy.get(':nth-child(4) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select').select('London')
      cy.get('[name="fromMonth"]').select('September')
      cy.get(':nth-child(6) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select').select('Sydney')
      cy.get('td > input').click()
  })
})