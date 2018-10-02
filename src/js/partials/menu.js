$(window).scroll(function () {

    var box1 = $('.full-menu').offset().top;
    if (box1 >= 100) {
        $('.full-menu').addClass('small-menu');
    } else {
        $('.full-menu').removeClass('small-menu');
    }
});