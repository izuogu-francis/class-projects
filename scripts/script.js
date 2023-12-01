const messageForm = document.getElementById("message-form");

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const successMessageBox = document.getElementById("success-message");

  const fullNameInputTag = document.getElementById("fname");
  const emailInputTag = document.getElementById("email");
  const messageTextareaTag = document.getElementById("message");

  // if (fullName == '') {
  //   alert('Please provide your full name.');
  // }else if(email == ''){
  //   alert('Please provide your email.');
  // }else if(message == ''){
  //   alert('Please add a message');
  // }else{
  //   messageForm.submit();
  // }

  let fullName = fullNameInputTag.value;
  let email = emailInputTag.value;
  let message = messageTextareaTag.value;

  if (fullName && email && message) {
    
    //messageForm.submit();
    //Send the following values to server to save
    //fullName
    //email
    //message

    //When server responses true, alert the user of success
    successMessageBox.innerHTML = `Hello ${fullName}, your response has been recorded.`;
    successMessageBox.style.display = 'block';

    //Reset fields
    fullNameInputTag.value = '';
    emailInputTag.value = '';
    messageTextareaTag.value = '';

  } else {
    alert('All fields are required. Please provide them.');
  }

})



