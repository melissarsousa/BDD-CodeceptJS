Feature: Business rules
  In order to order products
  As an user
  I want to be able to log in the system

  Scenario: Login with success @loginSucess
    Given that I am on the login page
    When I fill the email and password field
    And  I click on the login button
    Then I see 'Login realizado'

  Scenario: Login fail with only email field @loginFailEmail
    Given that I am on the login page
    When I fill the email field
    And  I click on the login button
    Then I see 'Senha inválida.'