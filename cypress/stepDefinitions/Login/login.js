import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { checkLoginFail, checkLoginSuccess, enterEmail, enterPassword, submit } from "../../Pages/LoginPage";
import userData from '../../fixtures/credentials.json'

Given('User visits to login page', () => {
    cy.visit("/");
})

When('User submits valid email and valid password', () => {
    enterEmail(userData.email)
    enterPassword(userData.password)
    submit()
})

When('User submits email as {string} and password as {string}', (userEmail, userPassword) => {
    enterEmail(userEmail)
    enterPassword(userPassword)
    submit()
})

Then('Check login success', () => {
    checkLoginSuccess()
})

Then('Login should fail with error message as {string}', (message) => {
    checkLoginFail(message)
})