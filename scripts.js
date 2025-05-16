document.addEventListener('DOMContentLoaded', function() {
    // Selecionar elementos do DOM
    const items = document.querySelectorAll('.item');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const dots = document.querySelectorAll('.dot');
    const numbers = document.querySelector('.numbers');
    
    let currentIndex = 0;
    const totalItems = items.length;
    let autoplayInterval;
     const autoplayDelay = 3000; // 5 segundos

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        goToNextSlide();
    }, autoplayDelay);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}
    
    // Função para atualizar o carrossel
    function updateCarousel() {
        // Atualizar todos os itens
        items.forEach((item, index) => {
            item.classList.remove('active', 'next', 'prev');
            
            // Definir classes com base na posição relativa ao item atual
            if (index === currentIndex) {
                item.classList.add('active');
            } else if (index === (currentIndex + 1) % totalItems) {
                item.classList.add('next');
            } else if (index === (currentIndex - 1 + totalItems) % totalItems) {
                item.classList.add('prev');
            }
        });
        
        // Atualizar dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
        
        // Atualizar número do indicador
        numbers.textContent = (currentIndex + 1).toString().padStart(2, '0');
    }
    
    // Evento para o botão 'Próximo'
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });
    
    // Evento para o botão 'Anterior'
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });
    
    // Eventos para os dots de navegação
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Inicializar o carrossel
    updateCarousel();
    
    // Navegação por teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            nextBtn.click();
        } else if (e.key === 'ArrowLeft') {
            prevBtn.click();
        }
    });
});


 