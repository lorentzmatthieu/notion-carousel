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

  loop: CONFIG.loop,

  slidesPerView: CONFIG.slidesPerView,

  spaceBetween: CONFIG.spaceBetween,

  autoplay: {
    delay: CONFIG.autoplayDelay,
    disableOnInteraction: false,
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
      slidesPerView: CONFIG.slidesPerView
    }
  }
});
