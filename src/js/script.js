document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper", {
      loop: true,
    //   spaceBetween: 100,
      slidesPerView: 3,
    //   autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   },
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  });