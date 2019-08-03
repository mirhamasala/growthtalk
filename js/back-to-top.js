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

// Back to Top button behaviour on manifesto modal
$(document).ready(function () {
  var pxShow = 50;
  var scrollSpeed = 500;
  $('#manif-modal').on('scroll', function() {
    if ($('#manif-modal').scrollTop() >= pxShow) {
       $("#backtotop").removeClass('display');
       $("#backtotop").addClass('visibility');
    } else {
       $("#backtotop").removeClass('visibility');
    }
  });

  $('#backtotop a').on('click', function() {
    $('#manif-modal').animate({
       scrollTop: 0
    }, scrollSpeed);
    return false;
  });
});

// Back to Top button behaviour on topics modal
$(document).ready(function () {
  var pxShow = 50;
  var scrollSpeed = 500;
  $('#topics-modal').on('scroll', function() {
    if ($('#topics-modal').scrollTop() >= pxShow) {
       $("#backtotop").removeClass('display');
       $("#backtotop").addClass('visibility');
    } else {
       $("#backtotop").removeClass('visibility');
    }
  });

  $('#backtotop a').on('click', function() {
    $('#topics-modal').animate({
       scrollTop: 0
    }, scrollSpeed);
    return false;
  });
});
