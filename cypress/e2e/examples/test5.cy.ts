//cypress -Spec
describe('empty spec', () => {
    it('passes', () => {
        cy.visit(Cypress.env('automationPractice'));

        // Table
        cy.get('table#product[name="courses"] tbody tr').each(($el, index, $list) => {
            if ($el.text().includes('25')) {
                console.log($el.find('td:nth-child(2)').text());
            }
        });

        cy.get('tr td:nth-child(2)').as('courseName').each(($el, index, $list) => {
            if($el.text().includes('Python')){
                cy.get('@courseName').eq(index).next().then((price) => expect(price.text()).to.equal('25'));
            }
        });

        cy.get('div.mouse-hover-content').invoke('show');
        cy.get('.mouse-hover-content').should('be.visible');
        cy.contains('Reload').click();

        cy.get('div.mouse-hover-content').invoke('hide');
        cy.get('.mouse-hover-content').should('not.be.visible');
        cy.contains('Top').click({force: true});
        cy.url().should('include', 'top');

        cy.get('div.mouse-hover-content').invoke('show');
        cy.get('.mouse-hover-content').should('be.visible');


    })
})
