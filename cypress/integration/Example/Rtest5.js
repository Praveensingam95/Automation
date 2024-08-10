describe('My third test case', function () {

    beforeEach('Rshety website', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

    it("child window", function () {

        cy.get('#opentab').then(function (e1) {
            const url = e1.prop('href')
            cy.visit(url)
            cy.origin(url, () => {
                cy.get('#navbarSupportedContent').find('[href="about.html"]').click()


            })


        })




    })



})
