import { user } from "../fixtures/user";

describe('Página de Cadastro', () => {

  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

    // Visita a página principal do AdoPet
    cy.visit('https://adopet-frontend-cypress.vercel.app/')

    // Clica no botão Cadastrar
    cy.contains('Cadastrar').click()

    // Verifica se a nova página foi carregada
    cy.url().should('include', '/cadastro');
    
    // Preenche o campo Nome
    cy.get('input[name="nome"]').type(user.fullName)

    // Preenche o campo E-mail
    cy.get('input[name="email"]').type(user.email)
    
    // Preenche o campo Senha
    cy.get('input[name="password"]').type(user.password)

    // Preenche o campo Confirme sua senha
    cy.get('input[name="confirm_password"]').type(user.password)

    // Clica no botão Cadastrar
    cy.contains('Cadastrar').click();

    // Verifica se a nova página foi carregada
    cy.url().should('include', '/login');

  })


})