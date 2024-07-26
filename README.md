# Teste Automatizado de Navegação e Pesquisa na Leitura.com.br

Este repositório contém um teste automatizado utilizando Cypress para navegar e realizar pesquisas no site Leitura.com.br.

## Descrição

O teste realiza as seguintes ações:
1. Visita a página inicial do site Leitura.com.br.
2. Realiza uma pesquisa vazia.
3. Realiza uma pesquisa específica pelo livro "O programador pragmático".
4. Clica no primeiro resultado da pesquisa.
5. Verifica se a URL da página do livro é a esperada.
6. Retorna à página inicial.
7. Abre o menu de categorias.
8. Clica na primeira categoria.
9. Verifica se a URL da página da categoria é a esperada.

## Estrutura do Projeto

```plaintext
cypress/
├── e2e/
│   └── teste.cy.js  # Arquivo contendo os testes Cypress
├── fixtures/
├── support/
│   ├── e2e.js
│   └── commands.js
cypress.config.js   # Configuração do Cypress
package.json        # Dependências do projeto
README.md           # Este arquivo
