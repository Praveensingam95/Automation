

describe('Test google', function () {

    // it.skip('Test google', function () {
    //     cy.visit('https://www.google.com/')
    //     cy.get('#APjFqb').type("w3school")
    //     cy.get('[data-entityname="w3school<b>s sql</b>"]').click()
    //     cy.get('.IsZvec').should('contain', 'Tutorial ...')

    // })

    // it('snapdeal home', function () {

    //     cy.visit('https://snapdeal.com/')
    //     cy.url().should('contain','snapdeal.com')
    //     cy.get('[title="Snapdeal"]').should('be.visible')




    // })

it ('practice',function(){
cy.visit('https://practice.expandtesting.com/')
cy.get('[href="/inputs"]').click()
cy.get('#input-number').type('25')
cy.get('#input-text').type('praveen')
cy.get('#input-password').type('si@123')
cy.get('#input-date').type('1995-05-12')
cy.get('#btn-clear-inputs').click()
cy.get('#input-number').should('be.empty')
cy.go('back')
cy.get('[href="/login"]').click()
cy.fixture('example.json').then((data)=>{
    cy.log(data.name, data.password)
})
cy.get('#flash').should('be.visible').contains('Your password is invalid!')

// cy.go('back')p
// cy.get('.navbar-brand').should('be.visible').click()
// cy.get('[href="/hovers"]').scrollIntoView().should('be.visible').debug();
// cy.get('.figure').eq(1).trigger('mousehover')
// //cy.pause()



})











})


























