import { Constants } from "../constants/Constants";
///<reference types = "cypress"/>

const constants = new Constants();

export class LoginPage
{
    emailTextBox = "#field-email";
    passwordTextBox = "#field-password";
    logingButton = "#submit-login";

    Login(email, password)
    {
        cy.wait(4000)
        cy.get(constants.pageFrame)
        .its(constants.documentBody)
        .then(cy.wrap)
        .find(constants.signInLink)
        .click()

        cy.wait(4000)
        cy.get(constants.pageFrame)
        .its(constants.documentBody)
        .then(cy.wrap)
        .find(this.emailTextBox)
        .type(email)

        cy.wait(4000)
        cy.get(constants.pageFrame)
        .its(constants.documentBody)
        .then(cy.wrap)
        .find(this.passwordTextBox)
        .type(password)

        cy.wait(4000)
        cy.get(constants.pageFrame)
        .its(constants.documentBody)
        .then(cy.wrap)
        .find(this.logingButton)
        .click()
    }

    Logout(logoutLink)
    {
        cy.wait(4000)
        cy.get(constants.pageFrame)
        .its(constants.documentBody)
        .then(cy.wrap)
        .find(logoutLink)
        .click()
    }
}