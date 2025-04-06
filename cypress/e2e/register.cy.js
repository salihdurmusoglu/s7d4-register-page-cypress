import {errorMessages} from "../../src/component/register";


describe('Register Page', () => {
  describe('Error Messages', () => {
  it('name input throws error for 2 chars', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="ad-input"]').type("sa")
    cy.contains(errorMessages.ad)
  })
  it('surname input throws error for 2 chars', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="soyad-input"]').type("du")
    cy.contains(errorMessages.soyad)
  })
  it('Email input throws error for emre.wit.', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="email-input"]').type("salih.wit")
    cy.contains(errorMessages.email)
  })
    it('Password input throws error for 1234', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="password-input"]').type("1234")
      cy.contains(errorMessages.password)
    })
    it('Button is disabled for unvalidated inputs.', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="password-input"]').type("1234")
      cy.get('[data-cy="submit-button"]').should("be.disabled")
    })

})
})