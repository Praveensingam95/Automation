///<reference types="cypress" />

describe('framework suit',()=>{

    before(function(){

cy.fixture('./example.json').then((data)=>
    {
this.data=data

    })
    })
it('My first frame',()=>{
    
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    
    cy.get('[name="name"]:nth-child(2)').type(this.data.CName)
    cy.get('select').select(this.data.Gender)

})





})