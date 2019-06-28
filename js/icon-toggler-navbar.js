$(document).ready(function () {

  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });

  $('.nav-link').on('click', function () {

    console.log('Hello');
    $('.animated-icon3').toggleClass('open');
  });
});
