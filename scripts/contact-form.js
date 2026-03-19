// Functions for input in contact form
let privacyCheckBoxChecked = false;

function handleBlurName() {
  const nameField = document.getElementById("name");
  const nameInputValue = nameField.value.trim();

  if (nameInputValue === "" || nameInputValue.length < 3) {
    nameField.classList.add("error");
    nameField.placeholder = domInfo[currentLang].contactFormNameError;
  } else {
    nameField.classList.remove("error");
    nameField.placeholder = "";
  }
  updateSubmitButtonState();
}

function handleBlurEmail() {
  const emailField = document.getElementById("email");

  if (!emailField.checkValidity()) {
    emailField.classList.add("error");
    emailField.placeholder = domInfo[currentLang].contactFormMailError;
  } else {
    emailField.classList.remove("error");
    emailField.placeholder = "";
  }

  updateSubmitButtonState();
}

function handleBlurTextarea() {
  const textarea = document.getElementById("message");
  const textareaValue = textarea.value.trim();

  if ((textareaValue === "") | (textareaValue.length < 5)) {
    textarea.classList.add("error");
    textarea.placeholder = domInfo[currentLang].contactFormTextareaError;
  } else {
    textarea.classList.remove("error");
    textarea.placeholder = "";
  }
  updateSubmitButtonState();
}

function handleCheckbox(e) {
  e.stopPropagation();
  const checkbox = document.getElementById("checkbox");
  privacyCheckBoxChecked = true;

  checkbox.classList.toggle("checked");
  updatePrivacyErrorText();
  updateSubmitButtonState();
}

function updatePrivacyErrorText() {
  const checkbox = document.getElementById("checkbox");
  const errorMsg = document.getElementById("error_msg_container");

  if (!privacyCheckBoxChecked) {
    errorMsg.textContent = "";
    return;
  }

  if (checkbox.classList.contains("checked")) {
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = domInfo[currentLang].contactPrivacyPolicyError;
  }
}

function updateSubmitButtonState() {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const textarea = document.getElementById("message");
  const checkbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit_msg");

  const nameValue = nameField.value.trim();
  const emailValue = emailField.value.trim();
  const messageValue = textarea.value.trim();

  const nameValid =
    nameValue.length >= 3 && !nameField.classList.contains("error");

  const emailValid =
    emailValue.length > 0 && !emailField.classList.contains("error");

  const messageValid =
    messageValue.length >= 5 && !textarea.classList.contains("error");

  const checkboxChecked = checkbox.classList.contains("checked");

  if (nameValid && emailValid && messageValid && checkboxChecked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

document.getElementById("name").addEventListener("blur", handleBlurName);
document.getElementById("email").addEventListener("blur", handleBlurEmail);
document.getElementById("message").addEventListener("blur", handleBlurTextarea);
document.getElementById("checkbox").addEventListener("click", handleCheckbox);

//live input validation, that enabled the submit message button
document.addEventListener("DOMContentLoaded", () => {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const textarea = document.getElementById("message");

  nameField.addEventListener("input", handleBlurName);
  emailField.addEventListener("input", handleBlurEmail);
  textarea.addEventListener("input", handleBlurTextarea);
});

//Send e-mail
async function sendContactMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const response = await fetch("/portfolio/contact_form_mail.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  return response.json();
}

document
  .getElementById("contact_form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const result = await sendContactMessage();
    if (result.success) {
      clearForm();
    } else {
      console.error(result.error);
    }
  });

function clearForm() {
  emptyInputs();
  restorePlaceholders();
  handleCheckBoxAndBtn();
  showSentMessage();
}

function emptyInputs() {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const textarea = document.getElementById("message");
  nameField.value = "";
  emailField.value = "";
  textarea.value = "";
}

function restorePlaceholders() {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const textarea = document.getElementById("message");
  nameField.placeholder = domInfo[currentLang].contactFormNamePlaceholder;
  emailField.placeholder = domInfo[currentLang].contactFormMailPlaceholder;
  textarea.placeholder = domInfo[currentLang].contactFormTextareaPlaceholder;
}

function handleCheckBoxAndBtn() {
  const checkbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit_msg");
  checkbox.classList.remove("checked");
  submitBtn.disabled = true;
}

function showSentMessage() {
  const msgBox = document.getElementById("error_msg_container");
  msgBox.textContent = domInfo[currentLang].contactPrivacyPolicySuccess;
  msgBox.classList.add("success-message");

  setTimeout(() => {
    msgBox.textContent = "";
    msgBox.classList.remove("success-message");
  }, 2000);
}

//!! disablke that chrome warnings at autofill
