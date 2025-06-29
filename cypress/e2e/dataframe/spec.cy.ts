import { runTestServer } from '../../support/testUtils';

describe('dataframe', () => {
  before(() => {
    runTestServer();
  });

  it('should be able to display an inline dataframe', () => {
    // Check if the DataFrame is rendered within the first step
    cy.get('.step').should('have.length', 1);
    cy.get('.step').first().find('.dataframe').should('have.length', 1);
    // Check that only 5 rows are visible per page
    cy.get('.step')
      .first()
      .find('.dataframe tbody tr')
      .should('have.length', 5);
  })
});
