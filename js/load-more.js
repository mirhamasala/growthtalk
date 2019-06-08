$(function () {
    $(".click-card").slice(0, 3).show();
    $("#hideArticles").hide();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".click-card:hidden").slice(0, 3).slideDown();
        if ($(".click-card:hidden").length == 0) {
            $("#loadMore").hide();
            $("#hideArticles").show();
        }
        // $('html,body').animate({
        //     scrollTop: $(this).offset().top
        // }, 1500);
    });
});

$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//         $('.totop a').fadeIn();
//     } else {
//         $('.totop a').fadeOut();
//     }
// });
