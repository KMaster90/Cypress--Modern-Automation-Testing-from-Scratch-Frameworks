import {CheckoutPage, HomePage, ShopCart, ShopPage, Toolbar, User} from "../../../../fixtures/classes";
import {And, Before, Given, Then, When} from "cypress-cucumber-preprocessor/steps";

const shopPage = new ShopPage();
const shopCart = new ShopCart();
const checkoutPage = new CheckoutPage();
const toolbar = new Toolbar();

Given('I open Ecommerce Page', function() {
    this.data = new User();
    cy.visit(Cypress.env('angularPractice'));
});

    When('I add items to cart', function() {
        cy.log('CY', this.data)
        toolbar.getShopButton().contains('Shop').click();
        shopPage.getProductCards().should('have.length', 4);
        const productsName = ['iphone X', 'Samsung Note 8', 'Blackberry', 'Nokia Edge'];
        cy.selectProduct(...productsName);
    });
    And('Validate the total prices', () => {
        shopPage.getCheckoutButton().contains('Checkout').click();
        shopCart.getTotalPriceFromItems().then(price => shopCart.getTotalCartPrice().should('equal', price));
    });
    Then('select the country submit and verify Tankyou message', () => {
        shopCart.getCheckoutButton().contains('Checkout').click();
        checkoutPage.getCountryInput().type('In');
        checkoutPage.getCountrySuggestion().contains('India').click();
        checkoutPage.getCheckboxButton().check({force: true}).should('be.checked');
        checkoutPage.getPurchaseButton().click();
        checkoutPage.getSuccessMessage().should('contain', 'Success! Thank you! Your order will be delivered in next few weeks :-).');
    });

const homePage = new HomePage();

    When('I fill the form details',function(dataTable) {
        homePage.getNameInputBox().should('have.attr', 'minlength', '2').type(dataTable.rawTable[1][0] || this.data.name);
        homePage.getGenderSelector().select(this.data.gender);
    });
    Then('Validate the forms behaviour',function(){
        homePage.getSubmitButton().should('have.value', 'Submit');
        homePage.getTwoDataBindingBox().then((el)=>homePage.getNameInputBox().should('have.value',el.val()));
        homePage.getEntrepreneurRadioButton().should('be.disabled');
    });
    And('select the Shop Page',()=>{
        toolbar.getShopButton().contains('Shop').click();
    });
