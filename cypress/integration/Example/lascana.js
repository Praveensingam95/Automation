
import { inc } from "semver"
import Homepage from "../pageobjects/lascananHomepage"
import { includes } from "lodash"

const hompage = new Homepage()

describe('Lascana', () => {
    before('cleare cookies', () => {
        cy.clearAllCookies

        // cy.intercept('METHOD','API URL END POINT').as('name');

    })
    beforeEach('visit webpage', () => {
        cy.visit('https://www.lascana.com/')

    })


    it('login', () => {

        hompage.getlogin()
        cy.fixture('./profile.json').then((data) => {
            cy.lascanlogin(data.email, data.password)

        })
        cy.wait(5000)
        cy.url().should('include','/secure/myaccount')


    })
    it.only('Menubar', () => {

        hompage.getMenubar().contains('Clothing').focus().screenshot()
        hompage.getMenubar().contains('Best Sellers').focus()
        hompage.getMenubar().contains('Dresses').focus()
        hompage.getMenubar().contains('Swimwear').focus()
       
        hompage.getMenubar().contains('Clothing').focus().contains('Tops').click({force:true})
        cy.wait(5000)
        cy.url().should('include', '/Tops')
        cy.get('div div  .img_container').each(($el,index,$list)=>{
            if($el.text().includes('lace insert top ')){
                cy.wrap($el).eq(index).click()
            }


        })
        





    })
})