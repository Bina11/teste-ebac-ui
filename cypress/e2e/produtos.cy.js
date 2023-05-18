describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da Lista', () => {
        var quantidade = 1
        
        cy.get('[class="product-block grid"]')
        //.first()
        //.click()
        .contains('Atomic Endurance Running Tee').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' x "Atomic Endurance Running Tee” foram adicionados no seu carrinho.')


    });

    it.only('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Atomic Endurance Running Tee', 'M', 'Blue', 4)
        
    }); 

});