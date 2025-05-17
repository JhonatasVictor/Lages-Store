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
   // Menu Hamburguer Interativo
        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.getElementById('nav-menu');
        const menuBackdrop = document.getElementById('menu-backdrop');
        const navItems = document.querySelectorAll('#nav-menu li');

        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuBackdrop.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            
            // Animação de rotação do ícone
            if (navMenu.classList.contains('active')) {
                mobileMenu.style.transform = 'rotate(90deg)';
            } else {
                mobileMenu.style.transform = 'rotate(0deg)';
            }
        });

        // Fechar menu ao clicar no backdrop ou nos itens
        menuBackdrop.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuBackdrop.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileMenu.style.transform = 'rotate(0deg)';
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuBackdrop.classList.remove('active');
                mobileMenu.classList.remove('active');
                mobileMenu.style.transform = 'rotate(0deg)';
            });
        });

        // Seu código existente para o carrossel...
        const items = document.querySelectorAll('.item');
        const dots = document.querySelectorAll('.dot');
        const numbers = document.querySelector('.numbers');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');
        let currentIndex = 0;

        function updateSlider(index) {
            items.forEach(item => item.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            items[index].classList.add('active');
            dots[index].classList.add('active');
            numbers.textContent = `0${index + 1}`;
            currentIndex = index;
        }

        nextBtn.addEventListener('click', () => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= items.length) nextIndex = 0;
            updateSlider(nextIndex);
        });

        prevBtn.addEventListener('click', () => {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) prevIndex = items.length - 1;
            updateSlider(prevIndex);
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateSlider(index);
            });
        });

        // Atualização automática do carrossel (opcional)
        setInterval(() => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= items.length) nextIndex = 0;
            updateSlider(nextIndex);
        }, 5000);


 