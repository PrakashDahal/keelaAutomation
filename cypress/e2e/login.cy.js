/// <reference types="cypress" />

import { checkLoginFail, checkLoginSuccess, enterEmail, enterPassword, submit } from "../Pages/LoginPage";


describe('Login Test', () => {
  beforeEach("", ()=> {
      cy.visit("/");
  })

  it('Should login into the system', () => {
      enterEmail("qatest@getnada.com")
      enterPassword("qatest12345")
      submit()
      checkLoginSuccess()
  })

  it('Should not login into the system', () => {
      enterEmail("wrongEmail@abc.com")
      enterPassword("wrongPassword")
      submit()
      checkLoginFail("User not found")
  })
})