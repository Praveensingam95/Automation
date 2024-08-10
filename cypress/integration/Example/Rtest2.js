describe('Second test suite',function(){

    it("My Second case",function(){
    
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type("ca")
    cy.wait(2000)
    
    //
    cy.get('.products').as('productlocator')
    cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()
    
    cy.get('@productlocator').find('.product').each(($e1,index,$list)=>{
    
        const textveg=$e1.find('h4.product-name').text()
    if(textveg.includes('Cashews'))
    {
       cy.wrap($e1).find('button').click()
    }
    })

    cy.get('a.cart-icon').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
    
    
})
    })