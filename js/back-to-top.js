// Back to Top button behaviour
$(document).ready(function () {
  var pxShow = 450;
  var scrollSpeed = 500;
  $(window).on('scroll', function() {
    if ($(window).scrollTop() >= pxShow) {
       $("#backtotop").removeClass('display');
       $("#backtotop").addClass('visibility');
    } else {
       $("#backtotop").removeClass('visibility');
    }
  });

  $('#backtotop a').on('click', function() {
    $('html, body').animate({
       scrollTop: 0
    }, scrollSpeed);
    return false;
  });
});
