///<reference types="cypress" />
///<reference types="cypress-iframe" />

import 'cypress-iframe'

describe('iframe model suite', () => {
    it('ifame practice', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.iframe().find('h1.pricing-title').should('have.length', 2)


    })


    it.only('amazon', () => {

        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('iphone 14')
        cy.get('#nav-search-submit-button').click()
        cy.get('div[data-cy="title-recipe"] .a-size-mini').contains('Apple iPhone 14 (128 GB) - Midnight').invoke('removeAttr','target').click({force: true})
        
        // cy.get('div[data-cy="title-recipe"] .a-size-mini').each(($e1, index, $list) => {

        //     if ($e1.text('Apple iPhone 14 (128 GB) - Midnight')){
                

        //         cy.wrap($e1).scrollIntoView().eq(0).click({force:true})
        //     }
        // })

    })


})