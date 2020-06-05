$(document).ready(function () {
    $('#year').text(function () {
        var date = new Date()
        return date.getFullYear()
    })
    $('.slider').slick({
        // centerMode: true,
        // centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    })
})

$(".btn").click(function(e) {
    $('html, body').animate({
        scrollTop: $("#" + e.target.id + "S").offset().top
    }, 2000);
});

$(".navbar-burger").click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

});