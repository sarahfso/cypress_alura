describe('Página de Cadastro', () => {

  it('Deve preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {

    // Visita a página principal do AdoPet
    cy.visit('https://adopet-frontend-cypress.vercel.app/')

    // Clica no botão Cadastrar
    cy.get('[data-test="register-button"]').click();

    // Clica no botão Cadastrar
    cy.get('[data-test="submit-button"]').click();

    // Verifica se as mensagens estão visíveis
    cy.contains('É necessário informar um endereço de email').should('be.visible');

    cy.contains('Crie uma senha').should('be.visible');
    
    cy.contains('Repita a senha criada acima').should('be.visible');

  })

})