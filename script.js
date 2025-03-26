document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper", {
        slidesPerView: 3, 
        loop: true,                      
        centeredSlides: true,            
        spaceBetween: 30, 
        loop: true,
        autoplay: { delay: 3000 },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            item.nextElementSibling.classList.toggle('hidden');
        });
    });
});