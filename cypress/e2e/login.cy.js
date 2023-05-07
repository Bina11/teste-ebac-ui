/// <reference types ="cypress" />

context('Funcionalidade Login', () =>{

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
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