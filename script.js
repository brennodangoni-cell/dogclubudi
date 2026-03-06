// Script para o header aparecer e ficar com fundo escuro ao rolar a página
const header = document.getElementById('mainHeader');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        header.classList.add('visible');
    } else {
        header.classList.remove('scrolled');
        header.classList.remove('visible');
    }
});

// Scroll Spy - Atualiza o menu ativo conforme a seção visível
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

function updateActiveNav() {
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}` || (current === 'home' && href === '#home')) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav(); // Chama uma vez no carregamento

// Script para Menu Mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scroll para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// --- CARROSSEL DE DEPOIMENTOS ---
const testimonialsData = [
    { quote: "A melhor hospedagem de pets em Uberlândia!. O Higor é sensacional, tratou meu pet com muito carinho, amor e cuidado. E além de tudo, conseguiu socializar o meu dog que era muito reativo. Hoje ele está bem mais tranquilo em relação aos …Mais", author: "Elizabeth Fanchiotti" },
    { quote: "Minhas filhotas adoram passar o dia na DogClub! Só de falar creche a Florzinha já fica toda feliz! O carinho do Higor com os cães é excepcional! Sempre fazendo alguma atividade diferente pra fazê-los gastar energia e desesstressar. Recomendo demais!", author: "Marcus Vinicius Machado" },
    { quote: "Ótima creche e hospedagem para cães. O Higor tem uma dedicação espetacular com os bichinhos! O tratamento é diferencial. Quando chegamos na cidade, ano passado, não conhecíamos nada na cidade. Encontrar a DogClub foi a melhor coisa para as nossas piticas! Parabéns DogClub!", author: "Elaine Santos" },
    { quote: "Serviço impecável! O DogClub Uberlândia é um verdadeiro paraíso para os pets. Atendimento atencioso, estrutura incrível e um ambiente seguro e acolhedor. Meu cãozinho adorou a experiência e voltou para casa feliz e bem cuidado! Super recomendo para quem busca qualidade e carinho no cuidado com os pets. ⭐⭐⭐⭐⭐", author: "Matheus Fernandes" },
    { quote: "não tenho nem palavras pra descrever! simplesmente eu confio muito no Igor e na equipe dele, a DogClub é maravilhosa, sempre cuidando muito bem das minhas filhas de 4 patas 😍\nrecomendo de olhos fechados!", author: "Isabela Aparecida Dantas Pacheco" },
    { quote: "DogClub é um ambiente, onde os Pets têm a oportunidade de explorar, brincar e interagir com outros pets, o que é essencial para o seu desenvolvimento social e emocional, lugar seguro e acolhedor . Repleto de atividades. Vale a pena conhecer . O meu ama esse lugar .", author: "Aida Lucia Alves de Faria" },
    { quote: "Melhor hotelzinho de Uberlândiaaa!!! Único lugar que confio para deixar meus dogs. São muito bem tratados com amor e carinho. Voltam pra casa cansadinhos de tanto brincar. Recomendo muito!!!", author: "Jhulie Cardoso" },
    { quote: "Extremamente profissionais e atenciosos, tratam com muito carinho nossos pets! Confio demais, meus dogs são super bem tratados e adoram o Higor! Recomendo!!!", author: "PATRICIA SOUZA" },
    { quote: "Meu filho de 4 patas - o Tobias, foi muito bem cuidado. Recebo vídeos e fotos dele enquanto hospedado. Cuidador preocupado com o bem estar do animal. Super recomendo", author: "Ruth Beruth" },
    { quote: "O melhor atendimento e hotelzinho de Udi sem dúvida nenhuma. O time é muito atencioso e dão fazem comunicação ao longo dia pra dizer como os pets estão no hotelzinho. É um lugar onde deixo os meus doguinhos e fico 100% despreocupado!", author: "Gustavo Marinho" },
    { quote: "Único lugar que confio de olhos fechados pra deixar o meu filhote, lá ele é tratado com todo o carinho possível!! Mandam fotos, vídeos e atualizações todos os dias.", author: "Eduardo Lacerda" },
    { quote: "Ótimo daycare e hotel! Meu cachorro melhorou demais os comportamentos só pelo fato de gastar energia, e agora chega em casa tranquilo e obediente!!", author: "Rafael Vaz" }
];

const sliderWrapper = document.querySelector('.testimonial-slider-wrapper');
const slider = document.getElementById('testimonialSlider');

if (slider && testimonialsData.length > 0) {
    // Duplica os depoimentos para criar um loop contínuo
    const allTestimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData];

    // Limpa o slider e adiciona os cards
    slider.innerHTML = '';
    allTestimonials.forEach(item => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `<div class="testimonial-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div><blockquote>"${item.quote}"</blockquote><cite>- ${item.author}</cite>`;
        slider.appendChild(card);
    });

    // O carrossel usa CSS animation para scroll automático
    // Os eventos de hover já estão no CSS, mas podemos adicionar interatividade aqui se necessário
}

// Formulário de contato
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o formulário
        alert('Mensagem enviada! Entraremos em contato em breve.');
        contactForm.reset();
    });
}

// --- CARROSSEL DE GALERIA ---
(function() {
    'use strict';
    
    const track = document.getElementById('galleryTrack');
    const btnPrev = document.getElementById('galleryBtnPrev');
    const btnNext = document.getElementById('galleryBtnNext');
    const indicators = document.getElementById('galleryIndicators');
    
    if (!track || !btnPrev || !btnNext || !indicators) return;
    
    const originalItems = Array.from(track.querySelectorAll('.gallery-item'));
    if (originalItems.length === 0) return;
    
    const totalItems = originalItems.length;
    let currentIndex = 0;
    let autoplayTimer = null;
    let isTransitioning = false;
    
    // Duplicar itens para loop infinito suave
    const lastItems = originalItems.slice(-5).map(item => {
        const clone = item.cloneNode(true);
        clone.classList.remove('active');
        return clone;
    });
    const firstItems = originalItems.slice(0, 5).map(item => {
        const clone = item.cloneNode(true);
        clone.classList.remove('active');
        return clone;
    });
    
    lastItems.forEach(item => track.insertBefore(item, originalItems[0]));
    firstItems.forEach(item => track.appendChild(item));
    
    const items = track.querySelectorAll('.gallery-item');
    const totalItemsWithClones = items.length;
    
    // Ajustar índice inicial para os itens originais
    currentIndex = 5;
    
    // Criar indicadores
    indicators.innerHTML = '';
    for (let i = 0; i < totalItems; i++) {
        const indicator = document.createElement('button');
        indicator.className = 'gallery-indicator';
        if (i === 0) indicator.classList.add('active');
        indicator.setAttribute('aria-label', `Ir para foto ${i + 1}`);
        indicator.addEventListener('click', () => goToSlide(i));
        indicators.appendChild(indicator);
    }
    
    const indicatorButtons = indicators.querySelectorAll('.gallery-indicator');
    
    function getRealIndex() {
        let idx = currentIndex - 5;
        if (idx < 0) idx = totalItems + idx;
        return idx % totalItems;
    }
    
    function updateTrack(instant = false) {
        if (isTransitioning && !instant) return;
        
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Mobile: otimizado - apenas atualizar item atual
            items.forEach((item, index) => {
                if (index === currentIndex) {
                    item.classList.add('active', 'visible');
                } else {
                    item.classList.remove('active', 'visible');
                }
            });
            
            const translateX = -currentIndex * 100;
            track.style.transition = instant ? 'none' : 'transform 0.3s ease-out';
            track.style.transform = `translateX(${translateX}%)`;
        } else {
            // Desktop: carrossel com preview
            items.forEach((item, index) => {
                const diff = Math.abs(index - currentIndex);
                item.classList.remove('active', 'visible');
                
                if (diff === 0) {
                    item.classList.add('active', 'visible');
                } else if (diff === 1) {
                    item.classList.add('visible');
                }
            });
            
            const container = track.parentElement;
            const containerWidth = container.offsetWidth;
            const gap = 30;
            const inactiveWidth = 400;
            const activeWidth = 500;
            
            const itemCenterInTrack = currentIndex * (inactiveWidth + gap) + (activeWidth / 2);
            const translateX = (containerWidth / 2) - itemCenterInTrack;
            
            track.style.transition = instant ? 'none' : 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            track.style.transform = `translateX(${translateX}px)`;
        }
        
        // Atualizar indicadores
        const realIndex = getRealIndex();
        indicatorButtons.forEach((btn, index) => {
            if (index === realIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    // Função checkLoop removida - agora a lógica está dentro de nextSlide/prevSlide
    
    // Recalcular ao redimensionar a janela (apenas desktop)
    let resizeTimer;
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                updateTrack();
            }, 250);
        }
    });
    
    function goToSlide(index) {
        if (index < 0) index = totalItems - 1;
        if (index >= totalItems) index = 0;
        currentIndex = index + 5; // Ajustar para os itens duplicados
        updateTrack();
        resetAutoplay();
    }
    
    function nextSlide() {
        currentIndex++;
        const realIndex = getRealIndex();
        
        // Se passou do último item original, já está nos duplicados do início - deixar continuar
        // Só resetar se passar muito além
        if (currentIndex >= totalItems + 5 + 2) {
            isTransitioning = true;
            currentIndex = realIndex + 5;
            updateTrack(true);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    isTransitioning = false;
                    updateTrack();
                });
            });
        } else {
            updateTrack();
        }
    }
    
    function prevSlide() {
        currentIndex--;
        const realIndex = getRealIndex();
        
        // Se passou do primeiro item original, já está nos duplicados do fim - deixar continuar
        // Só resetar se passar muito além
        if (currentIndex < 5 - 2) {
            isTransitioning = true;
            currentIndex = realIndex + 5;
            updateTrack(true);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    isTransitioning = false;
                    updateTrack();
                });
            });
        } else {
            updateTrack();
        }
    }
    
    // Adicionar clique nos itens para navegar
    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            let realIndex;
            if (index < 5) {
                realIndex = index + totalItems - 5;
            } else if (index >= totalItems + 5) {
                realIndex = index - totalItems - 5;
            } else {
                realIndex = index - 5;
            }
            goToSlide(realIndex);
        });
    });
    
    function startAutoplay() {
        stopAutoplay();
        autoplayTimer = setInterval(nextSlide, 5000);
    }
    
    function stopAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }
    
    function resetAutoplay() {
        stopAutoplay();
        setTimeout(startAutoplay, 5000);
    }
    
    // Event listeners
    btnNext.addEventListener('click', () => {
        nextSlide();
        resetAutoplay();
    });
    
    btnPrev.addEventListener('click', () => {
        prevSlide();
        resetAutoplay();
    });
    
    // Touch events
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    let touchMoved = false;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchMoved = false;
        stopAutoplay();
    }, { passive: true });
    
    track.addEventListener('touchmove', (e) => {
        if (!touchMoved) {
            const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
            const deltaY = Math.abs(e.touches[0].clientY - touchStartY);
            
            // Se o movimento horizontal for maior que o vertical, marcar como movimento horizontal
            if (deltaX > deltaY && deltaX > 10) {
                touchMoved = true;
            }
        }
    }, { passive: true });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        touchEndY = e.changedTouches[0].clientY;
        const diffX = touchStartX - touchEndX;
        const diffY = Math.abs(touchStartY - touchEndY);
        
        // Só mudar slide se o movimento horizontal for maior que o vertical e significativo
        if (Math.abs(diffX) > 50 && Math.abs(diffX) > diffY && touchMoved) {
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        touchMoved = false;
        resetAutoplay();
    }, { passive: true });
    
    // Pausar autoplay ao passar mouse
    const container = track.closest('.gallery-container');
    if (container) {
        container.addEventListener('mouseenter', stopAutoplay);
        container.addEventListener('mouseleave', startAutoplay);
    }
    
    // Inicializar
    updateTrack(true);
    requestAnimationFrame(() => {
        updateTrack();
        startAutoplay();
    });
})();

// === SISTEMA DE TEMA DARK/CLARO ===
(function() {
    'use strict';
    
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Função para obter tema preferido
    function getPreferredTheme() {
        // Verifica se há preferência salva
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        
        // Se não houver preferência salva, detecta a preferência do sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        
        return 'light';
    }
    
    // Função para aplicar tema
    function setTheme(theme) {
        if (theme === 'dark') {
            html.setAttribute('data-theme', 'dark');
            themeToggle.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.removeAttribute('data-theme');
            themeToggle.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    }
    
    // Função para alternar tema
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }
    
    // Inicializar tema ao carregar
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);
    
    // Event listener para o botão toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Ouvir mudanças na preferência do sistema (apenas se não houver preferência salva)
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Só aplicar mudança automática se não houver preferência salva
        mediaQuery.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
})();

// === RASTREAMENTO DE CONVERSÕES GOOGLE ADS ===
// Dispara evento de conversão quando o usuário clica nos links do WhatsApp
(function() {
    'use strict';
    
    // Função para disparar conversão
    function trackConversion() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
                'send_to': 'AW-16805769504/ADrwCK3_kZkaEKDizs0-',
                'value': 1.0,
                'currency': 'BRL'
            });
        }
    }
    
    // Adicionar listener quando o DOM estiver pronto
    function initConversionTracking() {
        const whatsappLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]');
        whatsappLinks.forEach(link => {
            // Usar capture para garantir que o evento seja capturado antes do redirecionamento
            link.addEventListener('click', trackConversion, true);
        });
    }
    
    // Inicializar quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initConversionTracking);
    } else {
        initConversionTracking();
    }
})();

