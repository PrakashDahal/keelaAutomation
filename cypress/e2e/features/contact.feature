Feature: Contact Page

  CRUD Operation in Contact Page

  Background: Make User login into the system
    Given User visits to login page
    When User submits valid email and valid password
    Then Check login success
    And User navigates to contact

  Scenario: Add Contact with first name only
    Given User opens add contact form
    When User enters first name as "Pra"
    And User saves the contact details
    Then Check user saved

  Scenario: Add Contact with first and last name
    Given User opens add contact form
    When User enters first name as "Pra"
    When User enters last name as "Test"
    And User saves the contact details
    Then Check user saved

  Scenario: Add Contact with email only
    Given User opens add contact form
    When User enters email as "pra@test.com"
    Then User saves the contact details

  # Todo: Check from here
  Scenario: Edit Title of the Contact from profile
    When User opens individual profile from table
    Then User edits the title in the profile
    And User gets success message

# Scenario: Delete User From Action
#   When User opens individual profile from table
#   Then User delets the contact
