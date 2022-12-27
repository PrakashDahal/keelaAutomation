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



# Update cases in login is not working in the system. 
# Button is not functional after getting one error.
# The steps to replicate issue is given in the below scenarios.

# This issue is in the prodiction like usa.keela.co and other sites as well.
  Scenario: Check second time update case
    When User submits email as "qatest12@getnada.com" and password as "qatest12345"
    Then Login should fail with error message as "User not found"
    When User submits email as "qatest@getnada.com" and password as "qatest123456"
    Then Login should fail with error message as "Incorrect password"
    


