/// <reference types="cypress" />

import { page1Po } from '../../../support/po-appActions/module1/page1Po'

describe('Example describe for specific page or part of page', () =>{
    beforeEach(() =>{
        cy.visit('www.randomUrl.cz')
    })

    // Je možné pracovat s describy uvnitř jiných describů
    describe('another describe ', () =>{
   
       // Každý describe může mít svou before, beforeEach, after, afterEach funkci
        before(() =>{})
        
        it('Test ', () => {
            // Data preparation
            
            
            // Test
            page1Po.pageObject1().should('be.visible')
            
            
            // Cleanup - pokud je potřeba
        })
    })
})
