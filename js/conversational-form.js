window.onload = function() {
  var conversationalForm = window.cf.ConversationalForm.startTheConversation({
    formEl: document.getElementById("form"),
    context: document.getElementById("cf-context"),
    submitCallback: function() {
     conversationalForm.addRobotChatResponse("Alright, you are done.");
    }
  });
};

$(document).ready(function() {
  $(".btn-outline").click(function() {
    $("#cf-context").toggle();
  });
});
