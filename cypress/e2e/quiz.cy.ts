describe('<Quiz />', () => {
  beforeEach(()=>{
    cy.visit('/')
  })
    it('should test start functionality', () => {
      cy.get('button').contains('Start Quiz').click()
      cy.get('.card').should('be.visible')
      cy.get('h2').should('not.be.empty')
    })
  })