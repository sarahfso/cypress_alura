import { user } from "../fixtures/user";

describe('Página de Login', () => {

  beforeEach(() => {
    // Visita a página principal do AdoPet
    cy.visit('https://adopet-frontend-cypress.vercel.app/');

    // Clica no botão Login
    cy.get('[data-test="login-button"]').click();
  })

  it('Deve realizar login com sucesso', () => {

    // Preenche o campo E-mail
    cy.get('input[name="email"]').type(user.email)
    
    // Preenche o campo Senha
    cy.get('input[name="password"]').type(user.password)

    // Clica no botão Entrar
    cy.contains('Entrar').click();

    // Verifica se a nova página foi carregada
    cy.url().should('include', '/home');

  })

})