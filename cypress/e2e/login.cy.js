/// <reference types ="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () =>{

  beforeEach(() => {
    cy.visit('minha-conta')
  });
  
  afterEach(() => {
    cy.screenshot()
  });
 
  it('Deve fazer login com sucesso', ()  => {
          cy.get("#username").type('aluno_ebac@teste.com')
          cy.get("#password").type('teste@teste.com')
          cy.get('.woocommerce-form > .button').click()

          cy.get('.breadcrumb > .active').should('contain' , 'Minha conta')
          cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, Aluno (não é Aluno? Sair)')
  })     

  it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
    cy.get("#username").type(perfil.usuario)
    cy.get("#password").type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
  });
 
  it.only('Deve fazer login com sucesso - Usando fixture', () => {
    cy.fixture('perfil').then(dados => {
      cy.get("#username").type(dados.usuario)
      cy.get("#password").type(dados.senha, {log: false} )
      cy.get('.woocommerce-form > .button').click()

    })
    
  });

  it('deve exibir uma mensagem de erro ao inserir usuário inválido',()  => {
    cy.get("#username").type('ebac@teste.com')
    cy.get("#password").type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
 
    it('deve exibir uma mensagem de erro ao inserir  senha inválido',()  => {
      cy.get("#username").type('aluno_ebac@teste.com')
      cy.get("#password").type('teste@teste')
      cy.get('.woocommerce-form > .button').click()
      

     
      
}) 

})

})