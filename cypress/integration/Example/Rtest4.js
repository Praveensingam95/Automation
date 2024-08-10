describe('My third test case', function () {

    beforeEach('Rshety website', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

    it("Alert box", function () {
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        //Window alert
        cy.on('window:alert', (String) => {
            expect(String).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (String) => {
            expect(String).to.equal('Hello , Are you sure you want to confirm?')
        })

    })


    //Child window oepn

    it("child window", function () {
        //cy.get('#opentab').click()
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.origin('https://www.qaclickacademy.com/', () => {

            cy.get('#navbarSupportedContent').find('[href="about.html"]').click()
            cy.get('.mt-50 h2').should('contain', 'QAClick Academy')

        })

    })

    it("nt.child table", function () {
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {


            const text = $e1.text()
            if (text.includes("Python")) {

                cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {

                    const pricetext = price.text()
                    expect(pricetext).to.equal('25')
                })


            }

        })

    })


//mouse over

    it.only("MOusehover", function () {
        //cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')




    })


})

