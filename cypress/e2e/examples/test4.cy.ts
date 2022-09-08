//cypress -Spec

describe('empty spec', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('automationPractice'));
    });

    xit('passes', () => {

        // Alert
        cy.get('#alertbtn').click();
        // Confirm
        cy.get('#confirmbtn').click();

        // window:alert
        cy.on('window:alert', (str) => {
            // Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        });
        // window:confirm
        cy.on('window:confirm', (str) => {
            // Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
            return false;
        });
        // open new tab
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'rahulshettyacademy');
        cy.go('back');
        // open new tab
        cy.get('#opentab').then(el => cy.visit(el.prop('href')));
        cy.url().should('include', 'rahulshettyacademy');
        cy.go('back');
    });
    it('should ', () => {
        // open new window
        cy.window().then((win) => cy.stub(win, 'open').as('winOpen'));
        cy.get('#openwindow').click();
        cy.get('@winOpen').should('have.been.calledOnceWithExactly', 'http://www.qaclickacademy.com/', "myWin", "width=1200, height=600, top=100, left=100, scrollbars=yes, resizable=yes");
        cy.origin(Cypress.env('qaclickacademy'), () => cy.visit('https://www.qaclickacademy.com'));
    });
})
