$(document).ready(function() {

    const sliderFoo = (sliderClass, nextArrow, prevArrow) => {
        $(sliderClass).slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            prevArrow: `<button type="button" class=${prevArrow}><i class="fas fa-angle-left"></i></button>`,
            nextArrow: `<button type="button" class=${nextArrow}><i class="fas fa-angle-right"></i></button>`,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });
    }

    sliderFoo('.preview-list_production-section', 'main-btn-nextArrow', 'main-btn-prevArrow');
    sliderFoo('.preview-list_recommended', 'recommended-btn-nextArrow', 'recommended-btn-prevArrow');

    // Click hamburger header
    $('.nav-menu-hamburger').click( () => {
        $('.nav').toggleClass('nav_active')
    })

    // Add active class mobile
    const activeClassMenu = (btn, checkBtn) => {
        $(btn).click((e) => {
            e.preventDefault();
            $(btn).toggleClass('active-btn');
            $(checkBtn).removeClass('active-btn')
            if(btn == '.catalog-btn') {
                $('.nav').removeClass('nav_active');
            }
        })
    }

    activeClassMenu('.nav-menu-hamburger', '.catalog-btn');
    activeClassMenu('.catalog-btn', '.nav-menu-hamburger');
});
