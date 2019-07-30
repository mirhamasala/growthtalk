window.onload = function() {
  var conversationalForm = window.cf.ConversationalForm.startTheConversation({
    formEl: document.getElementById("form"),
    context: document.getElementById("cf-context"),
    userImage: "text:🧑",
    hideUserInputOnNoneTextInput: true
  });
};

window.onload = function() {
  var conversationalForm = window.cf.ConversationalForm.startTheConversation({
    formEl: document.getElementById("form-2"),
    context: document.getElementById("cf-context-2"),
    userImage: "text:🧑",
    hideUserInputOnNoneTextInput: true
  });
};
