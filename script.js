const wrapper = document.getElementById("swiper-wrapper");

CONFIG.images.forEach(image => {

  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  slide.innerHTML = `
    <img src="${image}" />
  `;

  wrapper.appendChild(slide);
});

new Swiper(".mySwiper", {

  effect: "coverflow",

  grabCursor: true,
  centeredSlides: true,
  loop: true,

  slidesPerView: "auto",

  autoplay: {
    delay: CONFIG.autoplayDelay || 3000,
    disableOnInteraction: false,
  },

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 180,
    modifier: 1.2,
    slideShadows: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 3
    }
  }
});
