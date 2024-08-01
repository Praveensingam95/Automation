describe('Hooks concepts', function(){
    
  before('',()=>{
    cy.clearAllSessionStorage();
  })

    beforeEach('Pracise page',()=>{

        cy.visit('https://practice.expandtesting.com/')
    
            cy.get('[href="/login"]').click()
            cy.fixture('example.json').then((data)=>{
           cy.login(data.name, data.password)  

})
})

afterEach('log',() =>{
cy.get('[href="https://expandtesting.com/formations/"]').should('be.visible')
// cy.get('.navbar-brand').contains('Expand Testing')
// cy.get('.page-title-section').contains('Découvrez nos formations')

})

// after('all',()=>{

//     cy.get('[href="https://expandtesting.com/formations/"]').should('be.visible').click()
//     cy.get('.navbar-brand').contains('Expand Testing')


// })


it('Contact test',()=>{

    cy.get('[href="/contact"]').should('be.visible').click()
    cy.get('.container').contains("Contact page for Automation Testing Practice")

      })

      it('About test',()=>{
      cy.get('[href="/about"]').should('be.visible').click()
      cy.get('.container').contains('About This Website for Automation Testing Practice')


      })

it('Tip test',()=>{
    cy.get('[href="/tips"]').should('be.visible').click()
    cy.get('.container').contains('Test Automation Tips and Tricks for Efficient and Reliable Testing')


})

it('Tool test',()=>{
   cy.get('[href="/#tools"]').should('be.visible').click()
   cy.get('.container').contains('Practice Test Automation WebSite')

})












})