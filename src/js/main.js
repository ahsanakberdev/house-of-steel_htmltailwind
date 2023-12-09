function openMenu(){
    document.getElementById("mobileNav").classList.toggle("active");
}


var mySwiper = new Swiper('.swiper-container', {
loop :true,
slidesPerView: 2,
spaceBetween: 10,
breakpoints: {
640: {
    slidesPerView: 2,
    spaceBetween: 12,
},
768: {
    slidesPerView: 3,
    spaceBetween: 15,
},
1024: {
    slidesPerView: 4,
    spaceBetween: 20,
},
},
scrollbar: {
    el: '.js-swiper-scrollbar',
    draggable: true,
    
}
});

var mySwiper = new Swiper('.swiper-container2', {
loop :true,
slidesPerView: 1,
navigation: {
    nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev'
},
});














