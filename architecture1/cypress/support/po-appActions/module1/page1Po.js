// Každý si volí co je pro jeho projekt vhodné. Zda bude pracovat s APP actions nebo Page object modelem a jako formou
// Dle své volby si uzpůsobuji strukturu

class Page1Po {
    pageObject1() {
        return cy.get('.some-element')
    }
}

export const page1Po = new Page1Po() 