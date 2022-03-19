const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

navBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMobileNav()
})

window.addEventListener('click', () => {
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav()
    }
})

mobileNav.addEventListener('click', (event) => {
    event.stopPropagation();
})

function toggleMobileNav() {
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
    body.classList.toggle('no-scroll');
}

$(document).ready(function () {
    const tabActiveClass = 'is-active';
    const dataTab = $("[data-tab2]");

    dataTab.click((event) => {
        $("[data-tab-content2]").removeClass(tabActiveClass);
        dataTab.removeClass(tabActiveClass);

        const tab = $(event.target).data('tab');

        $(event.target).addClass(tabActiveClass);
        $(`[data-tab-content2='${tab}']`).addClass(tabActiveClass);
    })
});

$(document).ready(function () {
    const tabActiveClass = 'is-active';
    const dataTab = $("[data-tab]");

    dataTab.click((event) => {
        $("[data-tab-content]").removeClass(tabActiveClass);
        dataTab.removeClass(tabActiveClass);

        const tab = $(event.target).data('tab');

        $(event.target).addClass(tabActiveClass);
        $(`[data-tab-content='${tab}']`).addClass(tabActiveClass);
    })
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,

    navigation: {
        nextEl: '.slider-btn-next',
        prevEl: '.slider-btn-prev',
    },

    grabCursor: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    }
});