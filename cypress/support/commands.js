// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types='cypress' />



Cypress.Commands.add('login', (userName, password) => {
    cy.get('[type="text"]').should('have.attr', 'type', 'text').clear().type(userName)
    cy.get('[type="password"]').should('be.empty').type(password)
    cy.get('[type="submit"]').should('be.enabled').click()  //.debug();

})

Cypress.Commands.add('validation', (Name, mobile, date) => {

    cy.get('[type="text"]').should('have.attr', 'type', 'text').clear().type(Name)
    cy.get('[type="tel"]').should('be.empty').type(mobile)
    cy.get('[name="pickupdate"]').should("have.attr", 'type', 'date').type(date)

})

Cypress.Commands.add('BMI', (gender, age, weight, height) => {
    cy.get('#gender').select(gender)
    cy.get('#age').should('have.attr', 'type', 'number').clear().type(age)
    cy.get('#height').clear().type(height)
    cy.get('#weight').clear().type(weight)

})

Cypress.Commands.add('calenderPopUp', (year, month, datenumber) => {
    cy.get(".react-date-picker__inputGroup").click();
    cy.get(".react-calendar__navigation__label").click();
    cy.get(".react-calendar__navigation__label").click();
    cy.get(".react-calendar__navigation__label").click();
    cy.get(".react-calendar__navigation__prev-button").click()
    cy.contains("button", "1991 – 2000").click();
    cy.get('.react-calendar__decade-view__years > button').contains(year).click()
    cy.get(".react-calendar__year-view__months__month").eq(Number(month) - 1).click()
    cy.get('.react-calendar__month-view__days > button').contains(datenumber).click()
})

Cypress.Commands.add('selectprod', (productname) => {

cy.get('h4.card-title').each(($el, index, $list) => {
    if ($el.text().includes(productname)) {
        cy.get('button.btn.btn-info').eq(index).click()
    }
})
})
Cypress.Commands.add('lascanlogin', (userName, password) => {
    cy.get('input#txtLoginUserName').type(userName)
        cy.get('input#txtLoginPassword').type(password)
        cy.get('[value="Sign In"]').click()


})

Cypress.Commands.add('APILogin',()=>{
cy.request('POST','https://rahulshettyacademy.com/api/ecom/auth/login',
    {"userEmail":"Psingam1995@gmail.com","userPassword":"Praveen@1995"}).then(function(response)
    {
        expect(response.status).to.eq(200)
        Cypress.env('token',response.body.token);
    })


})