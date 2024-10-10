/// <reference types="cypress" />

describe('test with API call', function () {

    it('API network check', function () {

        cy.request('POST', 'https://216.10.245.166/Library/Addbook.php', {
            "name": "RestAssured with 132Java",
            "isbn": "BSGkh1222h",
            "aisle": "23122002",
            "author": "Praveen"
            //Add headers - content-type & Autorimzation.
        }).then(function (response) {
        expect(response.body).to.have.property('Msg', "successfully added")
        expect(response.status).to.eq(200)

    })
})

})