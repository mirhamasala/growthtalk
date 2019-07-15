window.onload = function() {
  var conversationalForm = window.cf.ConversationalForm.startTheConversation({
    formEl: document.getElementById("form"),
    context: document.getElementById("cf-context"),
    userImage: "text:🧑",
    hideUserInputOnNoneTextInput: true,
    submitCallback: function(){
        // be aware that this prevents default form submit.
        var formData = conversationalForm.getFormData();
        var formDataSerialized = conversationalForm.getFormData(true);
        console.log("Formdata:", formData);
        console.log("Formdata, serialized:", formDataSerialized);
        conversationalForm.addRobotChatResponse("Awesome! My partners in crime Andreea and Maxime will get back to you within 24h! 🎉");
    }
  });
};
