describe('Teste Livaria Leitura: Navegação e Pesquisa', function() {

    beforeEach(() => {
        cy.viewport(1280, 800);
    });

    // Ignorar exceções não capturadas de scripts de origem cruzada
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Script error.')) {
            return false;
        }
    });

    it('Performs a search and navigates through categories', function() {
        visitHomePage();
        performEmptySearch();
        searchForSpecificBook('O programador pragmático');
        clickFirstSearchResult();
        verifyBookPageUrl('o-programador-pragmatico-L999-9788577807000');
        navigateHome();
        openCategoryMenu();
        clickFirstCategory();
        verifyCategoryPageUrl('/livros/autoajuda');
    });

    function visitHomePage() {
        cy.visit('https://leitura.com.br/', {
            timeout: 40000
        });

        // Verifica se um elemento específico está visível na página
        cy.get('.container > .row > .col-sm-5 > #search > .form-control', { timeout: 60000 })
            .should('be.visible');
    }

    function performEmptySearch() {
        cy.get('.container > .row > .col-sm-5 > #search > .form-control').click();
        cy.get('.row > .col-sm-5 > #search > .input-group-btn > .btn').click();
    }

    function searchForSpecificBook(bookName) {
        cy.visit(`https://leitura.com.br/index.php?route=product/search&search=${encodeURIComponent(bookName)}`);
    }

    function clickFirstSearchResult() {
        cy.get('.product-thumb > div > .caption > h4 > a').click();
    }

    function verifyBookPageUrl(expectedUrlPart) {
        cy.url().should('include', expectedUrlPart);
    }

    function navigateHome() {
        cy.get('.collapse > .nav > .l-home > a > .fa').click();
    }

    function openCategoryMenu() {
        cy.get('.navbar > .collapse > .nav > .dropdown:nth-child(2) > .dropdown-toggle').click();
    }

    function clickFirstCategory() {
        cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled:nth-child(1) > li:nth-child(1) > a').click({ force: true });
    }

    function verifyCategoryPageUrl(expectedUrlPart) {
        cy.url().should('include', expectedUrlPart);
    }
});