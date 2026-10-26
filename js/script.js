
/* EXPLORING THE COSMOS — INTERACTIVE FEATURES */

// Mobile navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Close the menu after a navigation link is selected
    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });
}

// Automatically display the current year in the footer
const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
