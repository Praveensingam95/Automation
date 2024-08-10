/// <reference types='cypress' />
describe('Rshetty practise suite',()=>{
before('clear session',()=>{
cy.clearAllCookies();
})
beforeEach('visit website of Rshetty',()=>{
cy.visit('https://rahulshettyacademy.com/AutomationPractice')
})

it('Pracitse all commmonds',()=>{
 cy.get('.jumbotron a.blinkingText').should('have.text','Free Access to InterviewQues/ResumeAssistance/Material')

cy.get('.left-align [value="radio1"]').click().should('be.checked').and('have.attr','class','radioButton')

cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')

cy.get('#checkBoxOption1').check().should('be.checked').and('have.attr','type','checkbox')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

cy.get('input#autocomplete').type('ja')
cy.get('.ui-menu-item div').each(($e1,index,$list)=>{
if($e1.text()==='Japan')
{
    cy.wrap($e1).click()
}
})

cy.get('input#autocomplete').clear()
cy.get('input#autocomplete').type('ind')
cy.get('.ui-menu-item div').eq(1).click()

cy.get('#name').type('Praveen').should('have.attr','type','text')
cy.get('#alertbtn').click()

cy.on('window:alert',(string)=>{
    expect(string).to.equal('Hello Praveen, share this practice page and share your knowledge')
})

cy.get('#name').type('Praveen')
cy.get('#confirmbtn').click()
cy.on('window:confirm',(string)=>{
    expect(string).to.equal('Hello Praveen, Are you sure you want to confirm?')
})


cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

})

it('child window',()=>{
cy.get('a.btn-style').invoke('removeAttr','target').click()
cy.origin('https://www.qaclickacademy.com',()=>{
cy.get('.navbar-nav [href="contactus.html"]').click()
cy.get('.contact-from').should('contain','Keep in touch')

})


})





})