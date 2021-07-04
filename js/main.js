$(function () {
    $('.hero-slider').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/next.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {}
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.quotes__slider').slick({
        arrows: false,
        dots: true,
    });

    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

});