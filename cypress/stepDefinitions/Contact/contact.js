import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import {
    checkSavedContact, enterEmail, enterFirstName,
    enterLastName, openProfileFromTable, goToContactPage, openAddContactForm, saveContactDetails, deleteContact, editContactTitle, checkContactSavedSuccess
} from "../../Pages/ContactPage";

let currentContactFirstName = ''
let currentContactLastName = ''

getFullName = () => {
    return (currentContactFirstName + ' ' + currentContactLastName).trim()
}

Given("User navigates to contact", () => {
    goToContactPage()
})

When("User opens add contact form", () => {
    openAddContactForm()
})

When("User enters first name as {string}", (firstName) => {
    enterFirstName(firstName)
    currentContactFirstName = firstName
})

When("User enters last name as {string}", (lastName) => {
    enterLastName(lastName)
    currentContactLastName = lastName
})

When("User enters email as {string}", (email) => {
    enterEmail(email)
})

When("User saves the contact details", () => {
    saveContactDetails()
})

Then("Check user saved", () => {
    checkSavedContact(getFullName())
})

When("User opens individual profile from table", () => {
    openProfileFromTable("Pra Test")
})

Then("User edits the title in the profile", () => {
    editContactTitle()
})

Then("User delets the contact", () => {
    deleteContact()
})

Then("User gets success message", () => {
    checkContactSavedSuccess()
})

