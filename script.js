// Слайд-шоу для главного героя
let currentSlide = 0;
let slideInterval;

function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const totalSlides = slides.length;

    function showSlide(n) {
        // Скрываем все слайды
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Показываем текущий слайд
        currentSlide = (n + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }

    // Обработчики для индикаторов
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            resetInterval();
        });
    });

    // Автопереключение
    function startSlider() {
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startSlider();
    }

    startSlider();
}

// Мобильное меню
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileOverlay');
    
    hamburger.classList.add('active');
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('menu-open');
}

function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileOverlay');
    
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('menu-open');
}

// Скролл шапки
function initHeaderScroll() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Функции для модального окна заявки
function openRequestModal() {
    const modal = document.getElementById('requestModal');
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
}

function closeRequestModal() {
    const modal = document.getElementById('requestModal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    initSlideshow();
    initHeaderScroll();
    
    // Мобильное меню
    const hamburger = document.getElementById('hamburger');
    const closeMenu = document.getElementById('closeMenu');
    const overlay = document.getElementById('mobileOverlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    if (closeMenu) {
        closeMenu.addEventListener('click', closeMobileMenu);
    }
    
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeMobileMenu();
            }
        });
    }
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Модальное окно заявки
    const requestBtn = document.getElementById('requestBtn');
    const requestModal = document.getElementById('requestModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const requestForm = document.getElementById('requestForm');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    // Открытие модального окна
    if (requestBtn) {
        requestBtn.addEventListener('click', openRequestModal);
    }
    
    // Закрытие модального окна
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeRequestModal);
    }
    
    // Закрытие при клике на overlay
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeRequestModal);
    }
    
    // Закрытие на Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
            closeRequestModal();
        }
    });
    
    // Обработка формы заявки
    if (requestForm) {
        requestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получаем данные формы
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                message: document.getElementById('message').value.trim()
            };
            
            // Простая валидация
            if (!formData.name) {
                alert('Пожалуйста, введите ваше имя');
                document.getElementById('name').focus();
                return;
            }
            
            if (!formData.phone) {
                alert('Пожалуйста, введите ваш телефон');
                document.getElementById('phone').focus();
                return;
            }
            
            // Здесь будет отправка на сервер
            console.log('Форма отправлена:', formData);
            
            // Показываем сообщение об успехе
            alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
            
            // Закрываем модальное окно и очищаем форму
            closeRequestModal();
            requestForm.reset();
        });
    }

    // Плавная прокрутка к секциям
function scrollToSection(targetId) {
    const targetElement = document.querySelector(`.${targetId}`);
    if (targetElement) {
        // Закрываем мобильное меню
        closeMobileMenu();
        
        // Плавная прокрутка к элементу
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Обработка кликов по ссылкам в мобильном меню
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Проверяем, не ведет ли ссылка на другую страницу
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            if (target) {
                scrollToSection(target);
            }
        }
        // Если это ссылка на галерею, она откроется как обычно
    });
});

// Добавляем ID к секциям для навигации
document.addEventListener('DOMContentLoaded', function() {
    // Назначаем ID секциям
    const heroSection = document.querySelector('.hero');
    if (heroSection) heroSection.id = 'hero';
    
    const galleryPreview = document.querySelector('.gallery-preview');
    if (galleryPreview) galleryPreview.id = 'gallery-preview';
    
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) servicesSection.id = 'services';
    
    const mapSection = document.querySelector('.map-section');
    if (mapSection) mapSection.id = 'map';
    
    // Также можно добавить атрибут data-section для альтернативного подхода
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const className = section.className.split(' ')[0];
        section.setAttribute('data-section', className);
    });
});
    
    // Маска для телефона
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.startsWith('7')) {
                value = value.substring(1);
            }
            
            if (value.length > 0) {
                let formattedValue = '+7 ';
                if (value.length > 0) {
                    formattedValue += '(' + value.substring(0, 3);
                }
                if (value.length > 3) {
                    formattedValue += ') ' + value.substring(3, 6);
                }
                if (value.length > 6) {
                    formattedValue += '-' + value.substring(6, 8);
                }
                if (value.length > 8) {
                    formattedValue += '-' + value.substring(8, 10);
                }
                e.target.value = formattedValue;
            }
        });
    }
});

// Глобальные функции
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.openMobileMenu = openMobileMenu;
window.openRequestModal = openRequestModal;
window.closeRequestModal = closeRequestModal;