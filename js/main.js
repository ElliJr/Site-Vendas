const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 1; // Começamos no índice 1, pois o primeiro item é um clone
const items = Array.from(carousel.children);
const totalItems = items.length;

// Clonando o primeiro e o último item
const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);

// Adicionando os clones ao início e fim do carrossel
carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, items[0]);

// Atualizando o número total de itens no carrossel
const newTotalItems = carousel.children.length;

nextBtn.addEventListener('click', () => {
    if (currentIndex === newTotalItems - 1) {
        // Se for o último item (clone do primeiro), vamos voltar para o item original
        carousel.style.transition = "none"; // Desativar transição para a troca imediata
        currentIndex = 1; // Ir para o primeiro item original
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

        setTimeout(() => {
            carousel.style.transition = "transform 0.5s ease-in-out"; // Reativar transição
        }, 50);
    } else {
        currentIndex++;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex === 0) {
        // Se for o primeiro item (clone do último), vamos voltar para o item original
        carousel.style.transition = "none"; // Desativar transição para a troca imediata
        currentIndex = newTotalItems - 2; // Ir para o último item original
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

        setTimeout(() => {
            carousel.style.transition = "transform 0.5s ease-in-out"; // Reativar transição
        }, 50);
    } else {
        currentIndex--;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});


    function abrirMenu() {
        document.getElementById("menuLateral").style.width = "250px";
    }
    function fecharMenu() {
        document.getElementById("menuLateral").style.width = "0";
      }


      function filtrarProdutos() {
        // Pega o valor do campo de pesquisa
        let input = document.getElementById("searchInput").value.toLowerCase();
    
        // Pega todas as seções de produtos
        let secaoProdutos = document.querySelectorAll(".products");
    
        // Percorre cada seção e filtra os produtos
        secaoProdutos.forEach(function(secao) {
            let nomeSecao = secao.querySelector("h2").innerText.toLowerCase(); // Pega o nome da seção
            let produtos = secao.querySelectorAll(".product-item"); // Pega todos os produtos na seção
            let exibeSecao = false; // Variável para controlar se a seção deve ser exibida
    
            // Verifica se a seção deve ser exibida
            if (nomeSecao.includes(input)) {
                secao.style.display = "block"; // Exibe a seção se o nome corresponder à pesquisa
                exibeSecao = true; // Marca a seção como visível
            } else {
                secao.style.display = "none"; // Oculta a seção se o nome não corresponder à pesquisa
            }
    
            // Filtra os produtos dentro da seção
            produtos.forEach(function(produto) {
                // Verifica se o nome ou a descrição do produto (incluindo a imagem) contém o termo de pesquisa
                let nomeProduto = produto.querySelector("p") ? produto.querySelector("p").innerText.toLowerCase() : "";
                let imagemProduto = produto.querySelector("img") ? produto.querySelector("img").alt.toLowerCase() : "";
    
                if (nomeProduto.includes(input) || imagemProduto.includes(input)) {
                    produto.style.display = "block"; // Exibe o produto se corresponder à pesquisa
                } else {
                    produto.style.display = "none"; // Oculta o produto se não corresponder à pesquisa
                }
            });
    
            // Se nenhum produto for encontrado, oculta a seção
            if (!exibeSecao) {
                secao.style.display = "none";
            }
        });
    }
    
