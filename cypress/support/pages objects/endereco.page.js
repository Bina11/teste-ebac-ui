class EnderecoPage {

        editarEnderecoFaturamento() {
           
        }

        editarEnderecoEntrega() {
            cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
            cy.get(':nth-child(1) > .title > .edit').click()
            

        }
    }
export default new EnderecoPage()