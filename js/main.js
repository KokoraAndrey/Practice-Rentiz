const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const filter = document.querySelector('.filter');

if (burger && menu) {
    burger.addEventListener('click', getBurger);
}

if (filter) {
    const items = document.querySelectorAll('.block-filter');

    items.forEach(item => {
        item.addEventListener('click', event => {
            item.querySelector('.block-filter__dropdown').classList.toggle(
                'active'
            );
            item.querySelector('.block-filter__icon').classList.toggle(
                'active'
            );

            if (event.target.classList.contains('block-filter__item')) {
                item.querySelector('.block-filter__value').textContent =
                    event.target.textContent;
            }
        });
    });
}

function getBurger() {
    burger.classList.toggle('active');
    menu.classList.toggle('open');
    document.querySelector('body').classList.toggle('lock');
}

const swiper = new Swiper('.popular__slider', {
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1', // Включить стрелочки
    },
    slidesPerView: 1,
    autoHeight: true,
    grabCursor: true,
    // freeMode: true,
    spaceBetween: 20,
    breakpoints: {
        1043: {
            slidesPerView: 3,
        },
        626: {
            slidesPerView: 2,
        },
    },
});
