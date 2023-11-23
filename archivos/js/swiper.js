document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.clients-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
