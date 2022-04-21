import { Constants } from "../constants/Constants";
///<reference types = "cypress"/>

const constants = new Constants();
export class RegisterPage
{
    createAccountLink = "#content > div > a";
    maleGenderRadioButton ="#field-id_gender-1";
    femaleGenderRadioButton ="#field-id_gender-2";
    firstNameTextBox = "#field-firstname";
    lastNameTextBox = "#field-lastname";
    emailTextBox = "#field-email";
    passwordTextBox = "#field-password";
    birthDateTextBox = "#field-birthday";
    saveButton = "footer > button";
    customerDataPrivacyCheckBox = "div:nth-child(8) input[type=checkbox]";

    RegisterNewValidUser(firstname, lastName, email, password, dateOfBirth, gender)
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
        .find(this.createAccountLink)
        .click()
        
        if(gender == "Male")
        {
            cy.wait(4000)
            cy.get(constants.pageFrame)
            .its(constants.documentBody)
            .then(cy.wrap)
            .find(this.maleGenderRadioButton)
            .click()
        }
        else
        {
            cy.wait(4000)
            cy.get(constants.pageFrame)
            .its(constants.documentBody)
            .then(cy.wrap)
            .find(this.femaleGenderRadioButton)
            .click()
        }
        cy.wait(4000)
        cy.get(constants.pageFrame)
        .its(constants.documentBody)
        .then(cy.wrap)
        .find(this.firstNameTextBox)
        .type(firstname)

        cy.wait(4000)
        cy.get(constants.pageFrame)
        .its(constants.documentBody)
        .then(cy.wrap)
        .find(this.lastNameTextBox)
        .type(lastName)

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
        .find(this.birthDateTextBox)
        .type(dateOfBirth)

        cy.wait(4000)
        cy.get(constants.pageFrame)
        .its(constants.documentBody)
        .then(cy.wrap)
        .find(this.customerDataPrivacyCheckBox)
        .check()

        cy.wait(4000)
        cy.get(constants.pageFrame)
        .its(constants.documentBody)
        .then(cy.wrap)
        .find(this.saveButton)
        .click()

        cy.wait(4000)
        cy.get(constants.pageFrame)
        .its(constants.documentBody)
        .then(cy.wrap)
        .find(constants.signOutlink)
        .click()
    }
    
    Navigate(Url)
    {
        cy.visit(Url);
    }
}