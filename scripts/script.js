document.addEventListener("DOMContentLoaded" , ()=> {

    // ==========================================
    // СЛАЙДЕР
    new Swiper(".reviews__slider" , {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            type: "bullets",
            clickable: true,
            el: ".swiper-pagination"
        },
    });


});