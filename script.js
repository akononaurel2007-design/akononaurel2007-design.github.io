
/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


/* =========================
   FERMETURE DU MENU
   APRÈS UN CLIC
========================= */

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Ouvrir le menu");

        menuToggle.textContent = "☰";

    });

});


/* =========================
   APPARITION ANIMÉE
   DES SECTIONS
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   ANNÉE AUTOMATIQUE
========================= */

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();


/* =========================
   DÉFILEMENT FLUIDE
========================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
