// =========================
// MOBILE NAV TOGGLE
// =========================

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("nav ul");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

// =========================
// SMOOTH SCROLL
// =========================

const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: "smooth"
            });
        }

        // close menu on mobile after click
        navMenu.classList.remove("show");
    });
});

// =========================
// ACTIVE NAV LINK ON SCROLL
// =========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// =========================
// CONTACT FORM HANDLING
// =========================

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector("input[type='text']").value;
        const email = form.querySelector("input[type='email']").value;
        const message = form.querySelector("textarea").value;

        if (name && email && message) {
            alert("Thank you " + name + "! Your message has been sent successfully.");

            form.reset();
        } else {
            alert("Please fill all fields!");
        }
    });
}

// =========================
// SCROLL ANIMATION EFFECT
// =========================

window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition = "0.5s ease";
        }
    });
});
