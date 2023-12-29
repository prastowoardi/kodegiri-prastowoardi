import data from "../fixtures/login.json"

describe('Kodegiri Skill Test', () => {
    beforeEach('', () => {
        cy.visit('')
    })

    afterEach(function () {
        cy.wait(1500)
        const testName = this.currentTest.title
        cy.screenshot(testName, { capture: 'runner' })
    })

    data.testData.forEach((test) => {
        it(test.case, function () {
            cy.get('#email').then(($input) => {
                if (test.email !== null) {
                    cy.wrap($input).type(test.email)
                }
            })
            cy.get('#password').then(($input) => {
                if (test.password !== null) {
                    cy.wrap($input).type(test.password)
                }
            })
            cy.get('.btn').click()
        })
    })
})
