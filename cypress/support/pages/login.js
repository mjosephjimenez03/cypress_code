import { elements } from '../selectors/elements'

export class Login {
  inputCredentials(args = { username, password }) {
    if (args.username !== '')
      cy.get(elements.login.username).should('be.visible').type(args.username)
    if (args.password !== '')
      cy.get(elements.login.password).should('be.visible').type(args.password)
    cy.get(elements.login.loginButton).click()
  }
  validateLoginResult(args = { scenario }) {
    if (args.scenario === 'IncorrectCredentials') {
      cy.get(elements.login.errorMessage)
        .contains('Username and password do not match any user in this service')
        .should('be.visible')
      return false
    }
    if (args.scenario === 'EmptyUsername') {
      cy.get(elements.login.errorMessage)
        .contains('Username is required')
        .should('be.visible')
      return false
    }
    if (args.scenario === 'EmptyPassword') {
      cy.get(elements.login.errorMessage)
        .contains('Password is required')
        .should('be.visible')
      return false
    }
    cy.contains('Products').should('be.visible')
  }
}
