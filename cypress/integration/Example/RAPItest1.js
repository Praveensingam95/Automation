/// <reference types="cypress" />

describe('test with API call', function () {

    it('API network check', function () {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        },
            {
                statusCode: 200,
                body: [
                    {
                        "book_name": "RestAssured with Java",
                        "isbn": "BSG",
                        "aisle": "2302"
                    }]

            }).as('bookretrival')
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@bookretrival').then(({ request,response }) => {
            cy.get('tr').should('have.length',response.body.length+1)

        })
        cy.get('p').should('have.text','Oops only 1 Book available')

        //leangth of the respone array =rows of the table
    })



})