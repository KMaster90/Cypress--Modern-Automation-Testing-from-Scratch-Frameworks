//cypress -Spec
describe('empty spec', () => {
    it('passes', () => {
        cy.visit(Cypress.env('home'));
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products').as('productsLocator');
        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text();
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).contains('ADD TO CART').click();
            }
        });
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
        cy.get('select').select('Italy');
        cy.get('.chkAgree').check().should('be.checked');
        cy.get('button').contains('Proceed').click();
    })
})
