$('.header-page').slick({
  infinite: true,
  // arrows: false,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

$('.best-product-slider').slick({
  infinite: true,
  arrows: false,
  dots: true,
  // autoplay: true,
  cssEase: 'ease-out',
  slidesToShow: 4,
  slidesToScroll: 4
});

$('.novelty-slider').slick({
  infinite: true,
  arrows: false,
  autoplay: true,
  // dots: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

$('.images-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.images-nav'
});
$('.images-nav').slick({
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.images-for',
  // dots: true,
  // centerMode: true,
  variableWidth: true,
  focusOnSelect: true
});