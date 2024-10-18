import { Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import Homepage from "../pageobjects/Rhomepage"
import Prodctpage from "../pageobjects/RProductpage"
const homegape = new Homepage()
const prodctpage = new Prodctpage()

Given('I open Recommernce page',function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/')

})
// When I add item to cart

When('When I add item to cart',()=>{

    
    cy.get('h4.card-title').each(($el, index, $list) => { 
        if ($el.text().includes('Blackberry')) {
            cy.get('button.btn.btn-info').eq(index).click()
        }

    })

    data.productname.forEach(function (element) {
        cy.selectprod(element)
    });
    prodctpage.getcheckoutbox().click()
})

// And validate the total prices 
When('And validate the total prices',()=>{

    var sum = 0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

        const amount = $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)
    }).then(function () {
        cy.log(sum)
    })
    cy.get('h3 strong').then(function (element) {
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.be.equal(sum)
    })

})

// Then select the country submit and verify thankyou/

Then('Then select the country submit and verify thankyou',()=>{

    prodctpage.getcheckoutbox().click()
    cy.get('#country').type('india')
    cy.wait(8000)
    cy.get('.suggestions ul li a:nth-child(1)').click()
    cy.get('#checkbox2').click({ force: true })
    cy.get('[type="submit"]').click()
    cy.get('div.alert').then(function (element) {
        const actualtext = element.text()
        expect(actualtext.includes('Success')).to.be.true

    })

})

// When I fill the form details
When('When I fill the form details',()=>{
    homegape.geteditbox().type(data.CName)
    homegape.genderbox().select(data.Gender)

})

// Then validate the form behaviour
Then(' Then validate the form behaviour',()=>{

    homegape.twowaybox().should('have.value', data.CName)

})

//And select the shop page
And('And select the shop page',()=>{
    homegape.getshoptab().click()

})