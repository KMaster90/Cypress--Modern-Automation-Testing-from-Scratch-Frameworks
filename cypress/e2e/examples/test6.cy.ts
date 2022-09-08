//cypress -Spec

describe('empty spec', () => {
    before(() => {
        cy.visit(Cypress.env('automationPractice'));
        cy.frameLoaded('#courses-iframe');
        cy.iframeLoaderPaolo('#courses-iframe');
    });
    it('passes', () => {
        // iframe
        cy.iframe().contains('JOIN NOW').should('have.attr', 'href', 'https://courses.rahulshettyacademy.com/sign_up')
        cy.iframe().contains('Mentorship').should('have.attr', 'href', 'mentorship').click();
        cy.wait(1000)
        cy.iframePaolo().find('h1[class*="pricing-title"]').should('have.length', 2);
        cy.iframe().contains('Bronze');
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2);

    })
})
