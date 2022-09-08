//cypress -Spec

import {CheckoutPage, HomePage, ShopCart, ShopPage, Toolbar, User} from "../../fixtures/classes";

describe('empty spec', () => {
    before(function() {
        cy.visit(Cypress.env('angularPractice'));

        // cy.fixture('example').then((data) => {
        //     this.data = data;
        // });

        this.data = new User();
    });
    it('passes', function() {
        const homePage = new HomePage();
        const toolbar = new Toolbar();
        const shopPage = new ShopPage();
        const shopCart = new ShopCart();
        const checkoutPage = new CheckoutPage();
        homePage.getNameInputBox().should('have.attr', 'minlength', '2').type(this.data.name);
        homePage.getGenderSelector().select(this.data.gender);
        homePage.getSubmitButton().should('have.value', 'Submit');
        homePage.getTwoDataBindingBox().should('have.value', this.data.name);
        homePage.getEntrepreneurRadioButton().should('be.disabled');
        toolbar.getShopButton().contains('Shop').click();
        shopPage.getProductCards().should('have.length', 4);
        const productsName = ['iphone X', 'Samsung Note 8', 'Blackberry', 'Nokia Edge'];
        cy.selectProduct(...productsName);
        shopPage.getCheckoutButton().contains('Checkout').click();
        shopCart.getTotalPriceFromItems().then(price=>shopCart.getTotalCartPrice().should('equal',price));
        shopCart.getCheckoutButton().contains('Checkout').click();
        checkoutPage.getCountryInput().type('In');
        checkoutPage.getCountrySuggestion().contains('India').click();
        checkoutPage.getCheckboxButton().check({force:true}).should('be.checked');
        checkoutPage.getPurchaseButton().click();
        checkoutPage.getSuccessMessage().should('contain','Success! Thank you! Your order will be delivered in next few weeks :-).');
    })
})
