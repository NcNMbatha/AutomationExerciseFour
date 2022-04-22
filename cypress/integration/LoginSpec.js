import { Constants } from "../constants/Constants"
import { RegisterPage } from "../PageObject/RegisterPage"
import { LoginPage } from "../PageObject/LoginPage";
///<reference types = "cypress"/>

const registerPage = new RegisterPage();
const constants = new Constants();
const login = new LoginPage();

describe('Login Tets',()=>{

    beforeEach(()=>{
        registerPage.Navigate(constants.Url)
    })

    let expectedTextMessage = "";

    it('Verify that each user account is registered succesfully and can be logged In',()=>
    {
        cy.fixture(constants.jsonFile).then((Account)=>
        {
            for(var accountIndex in Account)
            {
                registerPage.RegisterNewValidUser(Account[accountIndex].firstName, Account[accountIndex].lastName, 
                                                  Account[accountIndex].email, Account[accountIndex].password, 
                                                  Account[accountIndex].dateOfBirth, Account[accountIndex].title);

                login.Login(Account[accountIndex].email, Account[accountIndex].password);
                expectedTextMessage = Account[accountIndex].firstName+" "+Account[accountIndex].lastName;
    
                cy.wait(5000)
                cy.get(constants.pageFrame)
                .its(constants.documentBody)
                .then(cy.wrap)
                .find(constants.userAccountNameLabel).should('contain.text',expectedTextMessage, { matchCase: false })

                login.Logout(constants.signOutlink);
            }
        })
    })
})