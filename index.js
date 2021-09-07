document.addEventListener('DOMContentLoaded', function() {
    var burgerMenu = document.querySelector('.js-openMenu');
    var headerNavigation = document.querySelector('.js-openedMenu');
    burgerMenu.addEventListener('click', function() {
        headerNavigation.classList.toggle('js-isActive');
        burgerMenu.classList.toggle('js-isActive');
    })
    var swiper = new Swiper('.items-slider__body', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.controls__item_right',
          prevEl: '.controls__item_left',
        },
      });
})