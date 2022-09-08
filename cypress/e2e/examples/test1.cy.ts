//cypress -Spec
describe('empty spec', () => {
    it('passes', () => {
        cy.visit(Cypress.env('home'));
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products').as('products');
        cy.get('.product').should('have.length', 5);
        cy.get('.product:visible').should('have.length', 4);
        cy.get('@products').find('.product').should('have.length', 4);
        cy.get('@products').find('.product').eq(2).contains('ADD TO CART').click();
        cy.get('@products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text();
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).contains('ADD TO CART').click();
            }
        });
        cy.get('.brand').should('have.text', 'GREENKART');
        cy.get('.brand').then(($el) => cy.log($el.text()));
    })
})
