import { Login } from '../../../support/pages/login'

// Declare Functions
const login = new Login()
// Test Cases
const TC001 = 'cypress/fixtures/feature/Login/TC001.json'
const TC002 = 'cypress/fixtures/feature/Login/TC002.json'
const TC003 = 'cypress/fixtures/feature/Login/TC003.json'
const TC004 = 'cypress/fixtures/feature/Login/TC004.json'
const TC005 = 'cypress/fixtures/feature/Login/TC005.json'

describe('Login', function () {
  beforeEach(() => {
    cy.clearCookies()
    cy.visit('/')
  })
  it('The user should not be able to login using incorrect username', function () {
    cy.readFile(TC001).then((data) => {
      login.inputCredentials({
        username: data.username,
        password: data.password,
      })
    })
    login.validateLoginResult({ scenario: 'IncorrectCredentials' })
  })
  it('The user should not be able to login using incorrect password', function () {
    cy.readFile(TC002).then((data) => {
      login.inputCredentials({
        username: data.username,
        password: data.password,
      })
    })
    login.validateLoginResult({ scenario: 'IncorrectCredentials' })
  })
  it('The user should not be able to login with empty username', function () {
    cy.readFile(TC003).then((data) => {
      login.inputCredentials({
        username: data.username,
        password: data.password,
      })
    })
    login.validateLoginResult({ scenario: 'EmptyUsername' })
  })
  it('The user should not be able to login with empty password', function () {
    cy.readFile(TC004).then((data) => {
      login.inputCredentials({
        username: data.username,
        password: data.password,
      })
    })
    login.validateLoginResult({ scenario: 'EmptyPassword' })
  })
  it('The user should be able to login using correct credentials', function () {
    cy.readFile(TC005).then((data) => {
      login.inputCredentials({
        username: data.username,
        password: data.password,
      })
    })
    login.validateLoginResult({ scenario: 'HappyPath' })
  })
})
