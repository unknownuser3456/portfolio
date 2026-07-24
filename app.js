/* ==========================================
   KAPOOR MATCHING CENTRE - INTERACTIVE LOGIC
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. HEADER SCROLL EFFECT ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. MOBILE MENU TOGGLE ---
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMenu = () => {
        menuToggle.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    };

    menuToggle.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuOverlay.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // --- 3. LIGHT/DARK THEME TOGGLE ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    // Load initial theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });


});
