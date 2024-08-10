
describe('My third test case',function(){

    beforeEach('Rshety website',function(){
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  })
//check boxes    
it("pratice checkbox",function(){
cy.get('#checkBoxOption1').check().should('be.checked').and('have.attr','value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('[type="checkbox"]').check(['option2','option3'])

//radio buttons
cy.get('[value="radio1"]').check().should('be.checked')


})

//static Dropdown
it("pratice dropdown",function(){
    cy.get('select').select('Option2').should('have.value','option2')

//dynamic dropdown
cy.get('#autocomplete').type('ind').debug();

cy.get('.ui-menu-item div').each(($e1,index,$list)=>{

    if($e1.text()==="India")
    {
        cy.wrap($e1).click()
    }
    
    })
cy.get('#autocomplete').should('have.value','India')

})


it("pratice Hide&show",function(){
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
})








})




})