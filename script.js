// =============================
// MOBILE MENU
// =============================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Tutup menu setelah memilih navigasi

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =============================
// CONTACT FORM
// =============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    if (name && email && message) {

        alert(
            `Terima kasih, ${name}!\n\n` +
            `Pesan kamu berhasil dikirim.`
        );

        contactForm.reset();

    }

});


// =============================
// NAVBAR SCROLL EFFECT
// =============================

window.addEventListener("scroll", () => {

    const header =
        document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(7, 17, 31, 0.97)";

    } else {

        header.style.background =
            "rgba(7, 17, 31, 0.85)";

    }

});