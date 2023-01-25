document.addEventListener("DOMContentLoaded", function() {
  let stepBtn = document.querySelectorAll ('.step__btn');
  let tabs = document.querySelectorAll(".work-content-tab");

stepBtn.forEach(function (element) {
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    stepBtn.forEach(function(btn){ btn.classList.remove('step__btn--active')});
    e.currentTarget.classList.add('step__btn--active');


    tabs.forEach(function(element) {
      element.classList.remove('work-tab-active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('work-tab-active');
  });
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');
burger.addEventListener('click',
function () {

  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');

})

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove ('burger--active');
    menu.classList.remove ('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  // пагинация
  pagination: {
  el: '.swiper-pagination',
  clickable: true
  },

  });
  let acc = new Accordion('#faqaccordion', {
    duration: 700,
    elementClass: 'faq__item',
    triggerClass: 'faq__btn',
    panelClass: 'faq__dropdown',
    showMultiple: false,
    collapse: true
  });
})

document.addEventListener('DOMContentLoaded', (e) => {

  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form--active')

  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form--active')

  })


})
