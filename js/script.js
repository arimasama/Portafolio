// Configuración inicial
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    // Menú móvil toggle
    const toggleMobileMenu = () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
    };

    menuIcon.addEventListener('click', toggleMobileMenu);

    // Desplazamiento suave
    const smoothScroll = (target, duration = 400) => {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

        const animation = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easedProgress = easeOutExpo(progress);

            window.scrollTo(0, startPosition + distance * easedProgress);

            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        };
        

        requestAnimationFrame(animation);
    };

    // Navegación por secciones
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                smoothScroll(targetSection);
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Sticky navbar y activación de secciones
    const handleScroll = () => {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        let currentSection = '';
        sections.forEach(section => {
            const top = window.scrollY;
            const offset = section.offsetTop - 150;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (top >= offset && top < offset + height) {
                currentSection = id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });

        // Limpiar menú móvil
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };

    window.addEventListener('scroll', handleScroll);

    // Animaciones con ScrollReveal
    const initScrollReveal = () => {
        ScrollReveal({
            distance: '70px',
            duration: 1800,
            delay: 60,
            once: true
        });

        ScrollReveal().reveal('.home-content h1, .home-content p, .home-sci', { origin: 'top' });
        ScrollReveal().reveal('.home-img img', { origin: 'right' });
        ScrollReveal().reveal('.about-content, .portfolio-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.about-img img, ', { origin: 'left' });
    };

    // Inicializar ScrollReveal
    if (window.ScrollReveal) {
        initScrollReveal();
    }
});