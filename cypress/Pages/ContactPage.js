const contactSideNavLinkSelector = '[data-tracking-navigation="Contacts"]'
const addContactButtonSelector = '[data-tracking-button="contacts-add-contact"]'
const firstNameFieldSelector = '[data-cy-input="First Name_string"]'
const lastNameFieldSelector = '[data-cy-input="Last Name_string"]'
const emailFieldSelector = '[data-cy-input="Email_string"]'
const saveContactButtonSelector = '[data-tracking-button="add-person-contact-modal-save"]'
const userFullNameSelector = '.col-12.font-size-h5 > .font-size-h5'

const userNameFromTableSelector = '[data-cy="fetch-table"]'
const moreActionSelector = '[data-tracking-button="contact-profile-"]'
const deleteSwalModalInputSelector = '.swal2-container > swal2-input'
const confrimButton = '.swal2-confirm'

const titleSelector = '[data-cy-input="Title_string"]'
const editButtonInProfileSelector = '[data-cy-button="edit-contact-Personal Info"]'
const editContactSaveButton = '[data-tracking-button="edit-contact-modal-save"]'

const notificationTitleSelector = '.notification-title'


export function goToContactPage() {
    cy.get(contactSideNavLinkSelector).click()
    cy.url().should('include', '/contacts')
}

export function openAddContactForm() {
    cy.get(addContactButtonSelector).click()
}

export function enterFirstName(firstName) {
    cy.get(firstNameFieldSelector).type("{selectAll}" + firstName)
}

export function enterLastName(lastName) {
    cy.get(lastNameFieldSelector).type("{selectAll}" + lastName)
}

export function enterEmail(email) {
    cy.get(emailFieldSelector).type("{selectAll}" + email)
}

export function saveContactDetails() {
    cy.get(saveContactButtonSelector).click()
}

export function checkSavedContact(fullName) {
    cy.get(userFullNameSelector).should('contain', fullName)
}

export function openProfileFromTable(userName) {
    cy.get(userNameFromTableSelector).contains(userName).first().click()
}

export function editContactTitle() {
    cy.get(editButtonInProfileSelector).click()
    cy.get(titleSelector).type('{selectAll}Mr.')
    saveEditContact()
}

export function checkContactSavedSuccess() {
    cy.get(notificationTitleSelector).contains('Contact successfully updated')
}

export function saveEditContact() {
    cy.get(editContactSaveButton).click()
}

export function deleteContact() {
    cy.get(moreActionSelector).click()
    cy.contains('.dropdown-menu', 'Delete Contact').click({ force: true })
    cy.get(deleteSwalModalInputSelector).type('DELETE')
    cy.get(confrimButton).click()

}