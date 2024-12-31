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
