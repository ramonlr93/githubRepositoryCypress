describe('Pantalla home Trello',function(){
    it('Comprobación pantalla de Login', function(){
        cy.visit('https://trello.com/#');
        cy.get('.btn-link').click();
        cy.get('h1').contains("Iniciar sesión en Trello");

    })
    it('Comprobación de error por no introducir correo electrónico', function(){

            cy.get('#login').click();
            cy.get('#error > .error-message').contains("Falta el correo electrónico");

        })
    it('Acceder a pantalla de creación de usuario desde Home', function(){
        cy.visit('https://trello.com');
        cy.get('.gdpr-cookie-consent-button').click();
       const mail = cy.get('.quick-signup-email').type(mailRandom()+"const984@gmail.com");
        cy.get('.quick-signup > .btn').click();
        cy.get('h5').contains("Regístrate");

    })
    function mailRandom() {
         var text = "";
               var baseText = "abcdefghijklmnopqrstuvwxyz";

                 for (var i = 0; i < 10; i++){
                  text += baseText.charAt(Math.floor(Math.random() * baseText.length));

                  return text;
                  }

     }
                it('Login Usuario creado', function(){
                    cy.visit('https://trello.com');
                    cy.get('.btn-link').click();
                    cy.get('#user').type("monchomuros@gmail.com");
                    cy.get('#password').type("Pruebas1");
                    cy.get('#login').click();
                    cy.get(':nth-child(3) > .boards-page-board-section-header > .boards-page-board-section-header-name').contains("Ramon");


                })

               it('Error al loguear con usuario incorrecto', function(){
                      cy.visit('https://trello.com');
                      cy.get('.btn-link').click();
                      cy.get('#user').type("monchomuros1@gmail.com");
                      cy.get('#password').type("Pruebas2");
                      cy.get('#login').click();
                      cy.get('#error > .error-message').contains("No existe ninguna cuenta");


                                })
})