window.onload = function() {
  var conversationalForm = window.cf.ConversationalForm.startTheConversation({
    formEl: document.getElementById("form"),
    context: document.getElementById("cf-context"),
    userImage: "text:🧑",
    preventAutoFocus: true,
    hideUserInputOnNoneTextInput: true
  });
};

$(document).ready(function() {
  $(".btn-outline").on('click', function() {
    $("#cf-context").toggle();
  });
});
