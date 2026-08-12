/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });

});


/* =========================
   HEADER ON SCROLL
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================
   WHATSAPP BOOKING
========================= */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const date =
        document.getElementById("date").value;

    const tour =
        document.getElementById("tour").value;

    const message =
        document.getElementById("message").value.trim();


    const whatsappNumber = "94764806045";


    let text =
        "Hello Habarana Aliya Safari & Village Tours!%0A%0A" +
        "I would like to make an enquiry.%0A%0A" +

        "Name: " + encodeURIComponent(name) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A";


    if (date) {
        text +=
            "Preferred date: " +
            encodeURIComponent(date) +
            "%0A";
    }


    if (tour) {
        text +=
            "Experience: " +
            encodeURIComponent(tour) +
            "%0A";
    }


    if (message) {
        text +=
            "Message: " +
            encodeURIComponent(message) +
            "%0A";
    }


    const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        text;


    window.open(url, "_blank");

});


/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryItems =
    document.querySelectorAll(".gallery-item");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.getElementById("closeLightbox");


galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image =
            item.querySelector("img");

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

    });

});


closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});


lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }

});
