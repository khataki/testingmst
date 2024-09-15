document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.background = "#111e";
        } else {
            header.style.background = "#222";
        }
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted successfully!');
    });
});

const slider = document.querySelector('.reviews-slider');
const slides = document.querySelectorAll('.review-slide');
const nextButton = document.querySelector('.next-slide');
const prevButton = document.querySelector('.prev-slide');




function scrollToSlide(index) {
    currentSlide = index;
    const slideWidth = slides[0].offsetWidth + 20; // ширина слайда + отступ
    slider.scrollTo({
        left: slideWidth * currentSlide,
        behavior: 'smooth'
    });
    updateIndicators();
}
