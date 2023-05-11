describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da Lista', () => {
        var quantidade = 1
        
        cy.get('[class="product-block grid"]')
        //.first()
        //.click()
        .contains('Atlas Fitness Tank').click()
        cy.get('.button-variable-item-M').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' x "Atlas Fitness Tank” foram adicionados no seu carrinho.')


    });

});