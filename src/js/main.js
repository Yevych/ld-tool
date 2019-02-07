$(document).ready(function () {

  //Slick slider
  $('.review__slider').slick({
    dots: false,
    infinite: true,
    speed: 450,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<div class="left-arrow"></div>',
    nextArrow: '<div class="right-arrow"></div>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          prevArrow: '<div class="left-arrow"></div>',
          nextArrow: '<div class="right-arrow"></div>',
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<div class="left-arrow"></div>',
          nextArrow: '<div class="right-arrow"></div>'
        }
      }
    ]
  })

  //Sliders height
  let viewSlides = $('.js-review')
  let viewSlideHeight = 0
  viewSlides.each(function () {
    let biggestHeight = $(this).innerHeight()
    if (biggestHeight > viewSlideHeight) {
      viewSlideHeight = biggestHeight
    }
  })
  $('.js-review').css({
    'height': viewSlideHeight
  })

  //Scroll section
  $(document).ready(function () {
    $('.menu').on('click', 'a', function (event) {
      //standard processing by reference
      event.preventDefault()
      //pick up the side identifier from the href attribute
      let id = $(this).attr('href'),
        //find out the height from the beginning of the page to the block to which the anchor refers
        top = $(id).offset().top
      //animate the transition to the distance - top for 1500 ms
      if (window.matchMedia('(max-width: 480px)').matches) {
        $('body,html').animate({scrollTop: top - 158}, 1500)
      }
      else $('body,html').animate({scrollTop: top - 132}, 1500)
    })
  })

  //Active nav
  $('.menu__wrapper a').on('click', function () {
    $('.menu-list a').removeClass('active')
    $(this).addClass('active')
  })

  //Hamburger
  $('.hamburger').on('click', function () {
    $(this).toggleClass('open-burger')
    $('.menu__wrapper').slideToggle(500)

    $('.menu__wrapper a').on('click', function () {
      $('.menu__wrapper').hide(500)
      $('.hamburger').removeClass('open-burger')
    })
  })

})