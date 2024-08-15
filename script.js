const header = document.querySelector(".header");
const burger = document.querySelector(".burger");


burger.addEventListener("click", () => {
    header.classList.toggle("mobile-header");
    if (header.classList.contains("mobile-header")) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
})

// -------------------------------------swiper-------------------------------------
const swiper = new Swiper('.brands-swiper.swiper', {
    // Optional parameters
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.brands .swiper-button-next',
      prevEl: '.brands .swiper-button-prev',
    },

    slidesPerView: 4,
    spaceBetween: 10,

    breakpoints: {
        0: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        },
    }
});
const swiper2 = new Swiper('.projects-swiper.swiper', {
    // Optional parameters
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.projects-slider .swiper-button-next',
      prevEl: '.projects-slider .swiper-button-prev',
    },

    slidesPerView: 3,
    spaceBetween: 30,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2.5,
        },
        1440: {
            slidesPerView: 3,
        },
    }
});
const swiper3 = new Swiper('.map-swiper.swiper', {
    // Optional parameters
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 3,
    spaceBetween: 24,

    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

// ----------------------------------popup--------------------------------
const popup = document.querySelector('.popup')
const popupShowBtns = document.querySelectorAll('.show-popup')
const closeFormBtn = document.querySelector('.close-form')

popupShowBtns.forEach(item => {
    item.addEventListener('click', () => {
        popup.classList.add('show-popup')
        document.body.classList.add('no-scroll')
    })
})

closeFormBtn.addEventListener('click', () => {
    popup.classList.remove('show-popup')
    document.body.classList.remove('no-scroll')
})

document.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('show-popup')
        document.body.classList.remove('no-scroll')
    }
});

// ----------------------------------show-more--------------------------------
const showMoreBtn = document.querySelector('.show-more-btn')
const sercicesCards = document.querySelectorAll('.services-card.hidden')

showMoreBtn.addEventListener('click', () => {
    sercicesCards.forEach(item => {
        item.classList.remove('hidden')
        showMoreBtn.style.display = 'none'
    })
})