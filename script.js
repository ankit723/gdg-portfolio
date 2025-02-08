// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});
// Mobile Menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    html.classList.remove('dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 200 },
        color: { value: '#6366f1' },
        shape: { type: 'circle' },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6366f1',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.skill-bar, .project-card').forEach(element => {
    observer.observe(element);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
