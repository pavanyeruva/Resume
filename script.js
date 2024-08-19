document.addEventListener("DOMContentLoaded", function () {
    // Navigation Toggler
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('.nav-list');
    const dropdowns = document.querySelectorAll('.dropdown');
    const sections = document.querySelectorAll('.section');

    // Toggle navigation menu on click (for mobile view)
    navbarToggler.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });

    // Toggle dropdown content on click
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (e) {
            e.stopPropagation();
            this.classList.toggle('show');
        });
    });

    // Close dropdowns when clicking outside
    window.addEventListener('click', function (e) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('show');
            }
        });
    });

    // Scroll Animation using Intersection Observer
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
