(function ($) {
  $(document).ready(function() {

    //hide "I'm curious" in navbar
    $("#cta-curious").hide();

    //fade in when scrolling
    $(function () {
      $(window).scroll(function () {

        if ($(this).scrollTop() > 450) {
          $("#cta-curious").fadeIn();
        } else {
          $("#cta-curious").fadeOut();
        }

      });
    });
  });
})(jQuery);
