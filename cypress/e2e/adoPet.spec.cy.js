import { user } from "../fixtures/user";

describe('AdoPet', () => {

  it('Visita a página principal do AdoPet e clica no botão "Ver pets disponíveis para adoção"', () => {

    // Visita a página principal do AdoPet
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    
    // Clica no botão "Ver pets disponíveis para adoção”
    cy.contains('Ver pets disponíveis para adoção').click()

    // Verifica se a nova página foi carregada
    cy.url().should('include', '/home');
  
  })

  it('Visita a página de principal do AdoPet e testa os botões header', () => {

    // Visita a página principal do AdoPet
    cy.visit('https://adopet-frontend-cypress.vercel.app/')

    // Testa o botão "Ir para Mensagens"
    cy.get('.header__message').click() 

    // Verifica se a nova página foi carregada
    cy.url().should('include', '/login');

    // Testa o botão "Tela Inicial"
    cy.get('.header__home').click() 

    // Verifica se a nova página foi carregada
    cy.url().should('equal', 'https://adopet-frontend-cypress.vercel.app/');

  })

  it('Visita a página de /login do Adopet', () => {

    // Visita a página Login do AdoPet
    cy.visit('https://adopet-frontend-cypress.vercel.app/login')

    // Verifica se a nova página foi carregada
    cy.url().should('include', '/login');

  })

  it('Visita a página de /home do Adopet', () => {

    // Visita a página Home do AdoPet
    cy.visit('https://adopet-frontend-cypress.vercel.app/home')

    // Verifica se a nova página foi carregada
    cy.url().should('include', '/home');

  })

  it('Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”', () => {

    // Visita a página Home do AdoPet
    cy.visit('https://adopet-frontend-cypress.vercel.app/home')

    // Clica no botão “Falar com o responsável”
    cy.contains('Falar com responsável').click()

    // Verifica se a nova página foi carregada
    cy.url().should('include', '/login');

  })
})