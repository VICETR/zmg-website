// --- JAVASCRIPT FOR NAVIGATION & ANIMATIONS ---

// 1. Navigation Logic
// Get the current page's URL path
const currentPage = window.location.pathname.split("/").pop();
// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    // If the link's href matches the current page, add the 'active' class
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    }
});


// 2. Scroll Animation Logic
const animatedElements = document.querySelectorAll('.anim-on-scroll');

// Check if there are any elements to animate on this page
if (animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}// JavaScript Document