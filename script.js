// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector("textarea");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all the fields.");
            return;
        }

        alert("Thank you, " + name + "! Your message has been submitted.");

        contactForm.reset();
    });
}


// ===============================
// BACK TO TOP
// ===============================

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
    backToTop.addEventListener("click", function (event) {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ===============================
// SCROLL REVEAL EFFECT
// ===============================

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .about-grid, .contact-grid"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(function (element) {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            element.classList.add("show");
        }

    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===============================
// ACTIVE NAVIGATION
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });

});


// ===============================
// CURRENT YEAR
// ===============================

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        "© " + currentYear + " Chetna. All rights reserved.";
}