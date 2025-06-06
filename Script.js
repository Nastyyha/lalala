// script.js

// 1. Меню для мобильных
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav__list");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
});

// 2. Динамический год в футере
document.getElementById("current-year").textContent = new Date().getFullYear();

// 3. Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});