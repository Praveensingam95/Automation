describe('First test suite',function(){

it("My firsttest case",function(){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type("ca")
cy.wait(2000)

cy.get('.product:visible').should('have.length',4)

//
cy.get('.products').as('productlocator')

// Parent child chaining 
cy.get('@productlocator').find('.product').should('have.length',4)
cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
{
    console.log("SFF")
})


cy.get('.products').find('.product').each(($e1,index,$list)=>{

    const textveg=$e1.find('h4.product-name').text()
if(textveg.includes('Cashews'))
{
   cy.wrap($e1).find('button').click()
}
})

//assert if logo text is corrextly displayed
cy.get('.brand').should('have.text','GREENKART')

//this is print logs
cy.get('.brand').then(function(logoelement)
{
cy.log(logoelement.text())
})
// const logo=cy.get('.brand')
//cy.log(logo.text())


})
})