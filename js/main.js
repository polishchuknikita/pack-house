$(document).ready(function() {

    const sliderFoo = (sliderClass, nextArrow, prevArrow) => {
        $(sliderClass).slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
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
        $('.catalog-menu-wrap_mobile').removeClass('active')
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

    // Modal$
    $('.header-info__contact-us').click((e) =>{
      e.preventDefault();
      $('#regModal').arcticmodal();
    })

    // Solo news slider
    if ($(this).width() <= 768) {
      $('.solo-news__more').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: `<button type="button" class="solo-news-prevArrow slick-arrow"><i class="fas fa-angle-left"></i></button>`,
        nextArrow: `<button type="button" class="solo-news-nextArrow slick-arrow"><i class="fas fa-angle-right"></i></button>`
      });
    }

    $('.catalog-btn').click((e) => {
      e.preventDefault();
      $('.catalog-menu-wrap_mobile').toggleClass('active')
    })

    // $('.catalog-menu > li > p').click((e) => {
    //   // console.log(e.target.parent());
    //   if($('.catalog-menu > li > p') != e.target) {
    //     $('.catalog-menu > li > p').removeClass('active')
    //     $(e.target).addClass('active')
    //   }
    // })

    $('.cart-details__nav-slider').slick({
      slidesToShow: ($('.cart-details__nav-item').length - 1),
      slidesToScroll: 1,
      arrows: false,
      vertical: true,
      verticalSwiping: true,
      asNavFor: '.cart-details__full-slider',
      focusOnSelect: true
    });
    $('.cart-details__full-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      focusOnSelect: true,
      dots: false,
      asNavFor: '.cart-details__nav-slider'
    });
		$('a[data-slide]').click(function(e) {
		   e.preventDefault();
		   var slideno = $(this).data('slide');
		   $('.cart-details__nav-slider').slick('slickGoTo', slideno - 1);
		});

    $('.banner-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false
    });

    // radio button cart
    $('.cart-details-delivery-info__item').click(() => {
      for( let i = 0; i < $('.cart-details-delivery-info__item').length; i++) {
        $('.cart-details-delivery-info__item').removeClass('active')
      }
      if($('.cart-details-delivery-info__item input:checked')) {
        $('.cart-details-delivery-info__item input:checked').parent().addClass('active')
      }
    })
  });