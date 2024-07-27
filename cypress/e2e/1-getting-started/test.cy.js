/// <reference types= "cypress" /> 


describe('write multiple css selector and write assertions ',()=>{
    // before(),  // this function would be executed once before all the test case "it blocks"
    // beforeEach(),// this function would perform every time before a test case 
    // after(),  // this function would be performed once after the first it block
    // afterEach(),  // this function would be performed once after every it block 
    // before();

    // afterEach('go back to home ')


    // after()

    before(()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    })


   // it('verify if as a admin or manager user  if I can add a customer',()=>{
      //  cy.get('cssSelector')
        
   // })

    it('test1',()=>{
        cy.get('#radio-btn-example').should('be.visible')
        cy.contains('Radio Button Example').should('be.visible')
        cy.get('[value="radio1"]').click().should('be.checked')
    
        cy.get('#select-class-example').should('contain','Suggession Class Example')
        cy.pause()

        cy.get('#autocomplete').should('be.visible')
        // cy.get('ul>.ui-menu-item').contains("India").click()
        
        cy.get('#dropdown-class-example').select('option1').should('be.visible').and('have.attr','name','dropdown-class-example')
        cy.get('#checkbox-example').contains("Checkbox Example").should('be.visible')
        cy.get("#checkBoxOption3").click()
        cy.pause()
        cy.get('#openwindow').click()
        cy.get('#opentab')
        cy.get('#name').type("Praveen")
    
        cy.get('#alertbtn') 
        cy.get('#product')
        cy.get('#hide-textbox')
        cy.get('#show-textbox')
        cy.get('#displayed-text')

    })


})