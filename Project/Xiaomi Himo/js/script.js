$(function () {

    $(".bike-slider").slick({
        arrows: false,
        dots: true,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $(".slider__items").slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $(".menu, .bike__column").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

});