Feature: E2e Ecommerce validation

  application Regression

  Background:
    Given I open Ecommerce Page

  @Buy
  Scenario: Ecommerce products delivery
    When I add items to cart
    And Validate the total prices
    Then select the country submit and verify Tankyou message

  @FillForm
  Scenario: Filling the form to shop
    When I fill the form details
      | name    | gender |
      | Marione | Male   |
    Then Validate the forms behaviour
    And select the Shop Page
