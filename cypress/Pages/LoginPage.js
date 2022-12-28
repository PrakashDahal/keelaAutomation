import userData from "../fixtures/credentials.json"
const UserEmail = "#user-email"
const Password = "#user-password"

export function enterEmail(email) {
    cy.get(UserEmail).type("{selectAll}" + email)
}

export function enterPassword(password) {
    cy.get(Password).type("{selectAll}" + password)
}

export function submit() {
    cy.get("button[type='submit']").click()
}

export function checkLoginSuccess() {
    cy.get(".font-size-h1").should("contain", `Welcome, ${userData.firstName} ${userData.lastName}!`)
}

export function checkLoginFail(message) {
    cy.get(".notification-title").should("contain", message)
}

export function logOut() {
    cy.get('button').contains(`${userData.firstName.toLocaleUpperCase()} ${userData.lastName.toLocaleUpperCase()}`)
        .click()
    cy.contains("Log Out").click()
}