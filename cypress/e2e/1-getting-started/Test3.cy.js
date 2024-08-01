describe('Test page', function () {

    it ('practice',function(){
        cy.visit('https://practice.expandtesting.com/')

        cy.get('.navbar-brand').should('be.visible').click()
        cy.get('[href="/form-validation"]').should('be.visible').click()
        cy.fixture('./example.json').then((data)=>{

            cy.validation(data.CName,data.mobile,data.date)
        })
        
        // cy.get('[type="text"]').should('have.attr','type','text').clear().type("Praveen")
        // cy.get('[type="tel"]').should('be.empty').type("9154202669")
        // cy.get('[name="pickupdate"]').should("have.attr",'type','date').type("2024-05-25")
         cy.get('[name="payment"]').select('card')
         cy.go('back')
    

    })

         it ('BMI Caluculator',function(){
            cy.visit('https://practice.expandtesting.com/')
            cy.get('[href="/bmi"]').scrollIntoView().should('have.text',"BMI Calculator").click()
            cy.fixture('./example.json').then((data)=>{
                cy.BMI(data.Gender2,data.Age,data.weight,data.height)


            })
            cy.get('.btn-primary').click()
            cy.get('#bmi-gauge').should('be.visible')
            cy.get('.btn-secondary').click()
            
         })
         it ('Notes APP',function(){

            cy.visit('https://practice.expandtesting.com/')
            cy.get('[href="/notes/app"]').scrollIntoView().click()
            cy.get('.btn-primary').should('be.visible').click()
            cy.fixture('./profile.json').then((data)=>{
                cy.login(data.email, data.password)

            })
            cy.get('.toast-body').should('be.visible').contains('Incorrect email address or password')


})


})







// describe('Test page', function () {

//   before('',()=>{
//     cy.clearAllSessionStorage();
//   })
//   beforeEach('visit website',()=>{
//     cy.visit('https://practice.expandtesting.com/')
//   })

//   afterEach('logout',()=>{
//     //cy.logout();
//   })

//   after(function () {
    
//    // cy.checkUserLogin();
//   });

//   it ('',function(){
//       //cy.visit('https://practice.expandtesting.com/')
//     // verify login functionality

//       cy.get('.navbar-brand').should('be.visible').click()
//       cy.get('[href="/form-val
// qkm-axor-uvo