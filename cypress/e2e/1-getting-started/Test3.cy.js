// const { beforeEach } = require("mocha")

describe('Test page', function () {

    beforeEach('visit page', () => {

        cy.visit('https://practice.expandtesting.com/')
    })

    it.only('practice', function () {

        cy.wait(10000)
        cy.request('GET','/socket.io/?*').then((res)=>{
            expect(res.status).to.eq(200)
        })
    
        // cy.get('.navbar-brand').should('be.visible').click()
        // cy.get('[href="/form-validation"]').should('be.visible').click()
        // cy.fixture('./example.json').then((data) => {

        //     cy.validation(data.CName, data.mobile, data.date)
    

        // cy.get('[type="text"]').should('have.attr','type','text').clear().type("Praveen")
        // cy.get('[type="tel"]').should('be.empty').type("9154202669")
        // cy.get('[name="pickupdate"]').should("have.attr",'type','date').type("2024-05-25")
        cy.get('[name="payment"]').select('card')
        cy.go('back')


    })

    it('BMI Caluculator', function () {

        cy.get('[href="/bmi"]').scrollIntoView().should('have.text', "BMI Calculator").click()
        cy.fixture('./example.json').then((data) => {
            cy.BMI(data.Gender2, data.Age, data.weight, data.height)


        })
        cy.get('.btn-primary').click()
        cy.get('#bmi-gauge').should('be.visible')
        cy.get('.btn-secondary').click()

    })


    it('Notes APP', function () {

        cy.get('[href="/notes/app"]').scrollIntoView().click()
        cy.get('.btn-primary').should('be.visible').click()
        cy.fixture('./profile.json').then((data) => {
            cy.login(data.email, data.password)
            cy.request('GET','/api/course').as('testApi');
            cy.wait('testApi')

        })
        cy.get('.toast-body').should('be.visible').contains('Incorrect email address or password')


    })

    it('mybrowser info', () => {

        cy.get('[href="/my-browser"]').click()
        cy.get('#browser-toggle').click()
        cy.get('#browser-info table').should('be.visible')
        cy.get('#browser-toggle').should('have.text','Hide Browser Information').click()
        cy.get('#browser-info table').should('not.exist')


    })

    it.only('drpdown',()=>{
    cy.get('[href="/dropdown"]').click()
    cy.get('.col-md-6 #dropdown').select('Option 1').should('have.value','1')
    cy.get('.form-group .form-control').select('50')
    cy.on('uncaught:exception',()=>{
        return false
    })
    cy.get('#country').select('India').should('have.value','IN')




    })

});





