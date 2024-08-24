/// <reference types="cypress" />

const { ftruncateSync } = require("fs-extra")

describe('test with API call', function () {

    it('API network Login', function () {

        cy.APILogin().then(function () {
            cy.visit('https://rahulshettyacademy.com/client', {
                onBeforeLoad: function (window) {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }

            })

        })

    })


it('API login lascan',function(){


    
})





})




