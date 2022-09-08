import {faker} from "@faker-js/faker";

export class User {
    name = faker.name.firstName();
    gender = faker.name.sex().toTitleCase();
}

export class HomePage {
    getNameInputBox() {
        return cy.get('input.form-control[name="name"]');
    }

    getGenderSelector() {
        return cy.get('#exampleFormControlSelect1');
    }

    getSubmitButton() {
        return cy.get('input.btn[type="submit"]');
    }

    getTwoDataBindingBox() {
        return cy.get<HTMLInputElement>('h4>input[name="name"]');
    }

    getEntrepreneurRadioButton() {
        return cy.get('#inlineRadio3');
    }
}
export class Toolbar {
    getShopButton() {
        return cy.get('a.nav-link[href="/angularpractice/shop"]');
    }
}
export class ShopPage{
    getProductCards(){
        return cy.get('app-card-list>app-card');
    }
    getCheckoutButton(){
        return cy.get('app-shop a.nav-link');
    }
}
export class ShopCart{
    getTotalPriceFromItems(){
        let sum=0;
        return cy.get('tr td:nth-child(4) strong').each((element, index, $list) => {
            sum += +(element.text().split(' ').pop().trim());
        }).then(()=>sum);

    };
    getTotalCartPrice(){
        return cy.get('.text-right > h3 > strong').then(element=>+element.text().split(' ').pop().trim());
    }
    getCheckoutButton(){
        return cy.get('button.btn.btn-success');
    }
}
export class CheckoutPage{
    getCountryInput(){
        return cy.get('input#country');
    }
    getCountrySuggestion(){
        return cy.get('.suggestions > ul > li > a', {timeout: 10000});
    }
    getCheckboxButton(){
        return cy.get('#checkbox2[type="checkbox"]');
    }
    getPurchaseButton(){
        return cy.get('input.btn.btn-success').should('have.value', 'Purchase');
    }
    getSuccessMessage(){
        return cy.get('div.alert.alert-success');
    }
}


