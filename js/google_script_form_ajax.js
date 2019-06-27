var $form = $('form#personal-form'),
    url = 'https://script.google.com/macros/s/AKfycbx6A0ufRrLtxcV4dNnvniM-5edwNiqtsgXqNIruqi3G9trDazs/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
