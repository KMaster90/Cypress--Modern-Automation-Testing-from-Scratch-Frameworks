//cypress -Spec
describe('empty spec', () => {
    it('passes', () => {
        cy.visit(Cypress.env('automationPractice'));
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1');
        cy.get('input[type="checkbox"]').check(['option2', 'option3']);
        cy.get('input[type="checkbox"]').uncheck('option3');

        // Static Dropdown
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');
        // Dynamic Dropdown
        cy.get('#autocomplete').as('dynamicCheck').type('ia');
        cy.get('.ui-menu-item .ui-menu-item-wrapper').each((element, index, $list) => {
            if (element.text() === 'India') cy.wrap(element).click();
        })
        cy.get('@dynamicCheck').should('have.value', 'India');

        // Visible and Invisible
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        // Radio Button
        cy.get('[value="radio2"]').check().should('be.checked');
    })
})
