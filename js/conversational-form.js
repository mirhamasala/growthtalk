window.onload = function() {
  var conversationalForm = window.cf.ConversationalForm.startTheConversation({
    formEl: document.getElementById("form"),
    context: document.getElementById("cf-context"),
    userImage: "text:🧑",
    hideUserInputOnNoneTextInput: true
  });
};

