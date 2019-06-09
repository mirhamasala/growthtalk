$(function () {
    $(".click-card").slice(0, 3).show();
    $("#hideArticles").hide();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".click-card:hidden").slice(0, 3).slideDown("slow");
        if ($(".click-card:hidden").length == 0) {
            $("#loadMore").hide();
            $("#hideArticles").show();
            $("#hideArticles").on('click', function (e) {
              e.preventDefault();
              $(".click-card").slice(3).slideUp("slow");
              $("#loadMore").show();
              $("#hideArticles").hide();
            });
        };
    });
});
