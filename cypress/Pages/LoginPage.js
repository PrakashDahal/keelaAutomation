const UserName = "#user-email"
const Password = "#user-password"


export function enterEmail(email) {
    cy.get(UserName).type("{selectAll}" + email)
}

export function enterPassword(password) {
    cy.get(Password).type("{selectAll}" + password)
}

export function submit() {
    cy.get("button[type='submit']").click()
}

export function checkLoginSuccess() {
    // Todo: When login otp gets fixed
    // cy.get("h1").should("contain", "Logged In Successfully")
}

export function checkLoginFail(message) {
    cy.get(".notification-title").should("contain", message)
}