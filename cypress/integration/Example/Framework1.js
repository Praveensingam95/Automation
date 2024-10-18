///<reference types="cypress" />
import Homepage from "../pageobjects/Rhomepage"
import Prodctpage from "../pageobjects/RProductpage"
const homegape = new Homepage()
const prodctpage = new Prodctpage()


describe('framework suit', () => {

    before(function () {



        //  cy.wrap(data).as('testData')

        // })
    })
    it('My first frame', () => {

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.fixture('example.json').then((data) => {

            homegape.geteditbox().type(data.CName)
            homegape.genderbox().select(data.Gender)
            homegape.twowaybox().should('have.value', data.CName)
            // homegape.getradiobutton().should('be.disabled')
            homegape.getshoptab().click()

            cy.get('h4.card-title').each(($el, index, $list) => { 
                if ($el.text().includes('Blackberry')) {
                    cy.get('button.btn.btn-info').eq(index).click()
                }

            })

            data.productname.forEach(function (element) {
                cy.selectprod(element)
            });

            prodctpage.getcheckoutbox().click()

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


        //cy.get('select').select(this.data.Gender)

    })





})