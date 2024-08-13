document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSection = document.getElementById(link.getAttribute("data-target"));

            sections.forEach(section => {
                section.classList.remove("active");
            });

            targetSection.classList.add("active");
        });
    });
});
