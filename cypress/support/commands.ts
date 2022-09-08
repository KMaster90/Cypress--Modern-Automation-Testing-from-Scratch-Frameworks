// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
let iframeStored: string;
Cypress.Commands.add('iframeLoaderPaolo',(iframeSelector:string) => {
   iframeStored = iframeSelector;
});

Cypress.Commands.add('iframePaolo',()=> {
    return cy.get(iframeStored).its('0.contentDocument').should('exist').its('body').should('not.be.empty').then<HTMLIFrameElement>(cy.wrap).as('iframe')
});

Cypress.Commands.add('selectProduct',(...productNames:string[])=> {
    cy.get('app-card-list>app-card').each((element, index, $list) => {
        productNames.forEach((productName) => {
            if (element.find('h4.card-title').text().includes(productName)) {
                cy.wrap(element).find('button.btn.btn-info').click({waitForAnimations: true});
            }
        });
    });
});

String.prototype.toTitleCase = function(){
    return this.charAt(0).toUpperCase() + this.slice(1)
};

import 'cypress-iframe';
