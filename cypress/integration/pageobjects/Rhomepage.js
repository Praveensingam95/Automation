
class Homepage
{
geteditbox()
{
return cy.get('[name="name"]:nth-child(2)')
}
twowaybox(){
    return cy.get('[name="name"]:nth-child(1)')
}
genderbox(){
    return  cy.get('select')
}
getradiobutton(){
    cy.get('#inlineRadio3')
}
getshoptab(){
    return cy.get('[href="/angularpractice/shop"]')
}

}
export default Homepage