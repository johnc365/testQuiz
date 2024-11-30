import Quiz from '../../client/src/components/Quiz';

describe('<Quiz />', () => {
    it('should find a Start Quiz button', () => {
      cy.mount(<Quiz />)
      cy.get('button').contains('Start Quiz').click()
      cy.get('.card').should('be.visible')
      cy.get('h2').should('not.be.empty')
    })
  })