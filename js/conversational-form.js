window.onload = function() {
  var conversationalForm = window.cf.ConversationalForm.startTheConversation({
    formEl: document.getElementById("form"),
    context: document.getElementById("cf-context"),
    userImage: "text:🧑",
    hideUserInputOnNoneTextInput: true,
    submitCallback: function() {
        var formData = conversationalForm.getFormData();
        var formDataSerialized = conversationalForm.getFormData(true);
        console.log("Formdata:", formData);
        console.log("Formdata, serialized:", formDataSerialized);
        conversationalForm.addRobotChatResponse("Alright, you are done.")
      }
  });
};
