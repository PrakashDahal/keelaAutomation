Feature: Login Page

  Check all different login Scenarios

  Background: Visit Login Page
    Given User visits to login page

  Scenario: Check Valid Login
    When User submits valid email and valid password
    Then Check login success

  Scenario Outline: Check Invalid Login cases
    When User submits email as "<userEmail>" and password as "<userPassword>"
    Then Login should fail with error message as "<message>"
    Examples:
      | userEmail          | userPassword    | message            |
      | qatest@getnada.com | invalidPassword | Incorrect password |
      | invalid@test.com   | qatest12345     | User not found     |
