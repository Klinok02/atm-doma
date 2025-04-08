document.addEventListener('DOMContentLoaded', () => {

  new Swiper(".advantages__slider", {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      spaceBetween: 36,
      
      breakpoints: {
          415: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          }
      }
  });

  new Swiper(".news__slider", {
    navigation: {
      nextEl: '.news-button-next',
      prevEl: '.news-button-prev'
    },

    slidesPerView: 'auto',
    
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1366: {
          slidesPerView: 4,
        },
    }
  });
});