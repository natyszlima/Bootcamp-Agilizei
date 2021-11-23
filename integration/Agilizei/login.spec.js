/// <reference types="cypress"/>
import elemento from '../../elementos/elementos-login'
//**https://res.cloudinary.com/douy56nkf/image/upload/v1588127894/twitter-build/bvxmlgckusmrwyivsnzr.svg
describe('Twitter clone - login', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      beforeEach(() => {
        cy.intercept({
            method:'GET',
            hostname:'res.cloudinary.com'
        },
        {
            statusCode: 200,
            fixture: 'losango'
        }).as('cloud')
      });
    it('login com usuario valido e Tweet com usuario logado!', () => { 
        cy.login()
        cy.visit('/');
        cy.get(elemento.texto_do_tweet).type('Quero ser um dos maiores TesteQA, aprender o máximo possível para ajudar e fazer a diferença no mercado de TI')
        cy.get(elemento.botao_tweet).should('be.visible').contains('Tweet').click();
    });

});