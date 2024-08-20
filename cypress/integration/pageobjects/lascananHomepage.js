class Homepage
{

    getlogin()
    {
        cy.get('.account img[alt="Link. Account login icon." ]').click({force:true})
        
    }
getMenubar(){
    return cy.get('div#main-nav')
}
getsubmenu(){
    return cy.get('.menu-item .submenu-pane')
}
gettop(){
    return cy.get('a[href="https://www.lascana.com/Tops"]').click({force:true})
}

}
export default Homepage