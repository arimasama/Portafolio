/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// menu icon navbar
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


// sticky navbar //
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/



/*========== swiper ==========*/
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 50,
    loop: true,
    speed: 500,    
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun')
    document.body.classList.toggle('dark-mode');
}

/*========== scroll reveal ==========*/

ScrollReveal({
    reset: true,
    distance: '70px',
    duration: 1500,
    delay: 50
});

ScrollReveal().reveal('.home-content, .heading, .about-content h3, .about-content p ', { origin: 'top' });
ScrollReveal().reveal(' .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-img img', { origin: 'left' });