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

  centeredSlides: true,
  loop: true,

  slidesPerView: "auto",

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  speed: 800,

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 250,
    modifier: 1,
    slideShadows: false,
    scale: 0.9,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});
