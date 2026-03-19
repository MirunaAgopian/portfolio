/**
 * Tracks whether the privacy checkbox has been interacted with at least once.
 * Used by handleCheckbox() and updatePrivacyErrorText() to control when
 * the privacy‑policy error message should appear.
 * @type {boolean}
 */
let privacyCheckBoxChecked = false;

/**
 * Validates the name field on blur and updates its error state and placeholder.
 * Also triggers a submit‑button state update.
 */
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

/**
 * Validates the email field on blur using built‑in browser validation.
 * Applies or removes the error state and updates the placeholder accordingly.
 */
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

/**
 * Validates the message textarea on blur and updates its error state.
 * Also triggers a submit‑button state update.
 */
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

/**
 * Toggles the privacy‑policy checkbox state and updates related UI feedback.
 * Also triggers a submit‑button state update.
 * @param {Event} e - The click event.
 */
function handleCheckbox(e) {
  e.stopPropagation();
  const checkbox = document.getElementById("checkbox");
  privacyCheckBoxChecked = true;
  checkbox.classList.toggle("checked");
  updatePrivacyErrorText();
  updateSubmitButtonState();
}

/**
 * Updates the privacy‑policy error message based on the checkbox state.
 * Clears the message when the checkbox is checked.
 */
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

/**
 * Enables or disables the submit button based on the validity
 * of all form fields and the privacy‑policy checkbox.
 */
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

/**
 * Triggers name‑field error handling when the field loses focus.
 * @event blur
 */
document.getElementById("name").addEventListener("blur", handleBlurName);

/**
 * Triggers email‑field error handling when the field loses focus.
 * @event blur
 */
document.getElementById("email").addEventListener("blur", handleBlurEmail);

/**
 * Triggers textarea error handling when the field loses focus.
 * @event blur
 */
document.getElementById("message").addEventListener("blur", handleBlurTextarea);

/**
 * Toggles the privacy checkbox state and updates related UI feedback.
 * @event click
 */
document.getElementById("checkbox").addEventListener("click", handleCheckbox);

/**
 * Adds live input validation for all contact‑form fields
 * once the DOM is fully loaded.
 * @event DOMContentLoaded
 */
document.addEventListener("DOMContentLoaded", () => {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const textarea = document.getElementById("message");

  nameField.addEventListener("input", handleBlurName);
  emailField.addEventListener("input", handleBlurEmail);
  textarea.addEventListener("input", handleBlurTextarea);
});

/**
 * Sends the contact‑form data to the backend via POST request.
 * @returns {Promise<Object>} The JSON response from the server.
 */
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

/**
 * Handles the contact‑form submission, sends the message,
 * and clears the form on success.
 * @event submit
 */
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

/**
 * Clears all form fields, restores placeholders,
 * resets checkbox and button state, and shows a success message.
 */
function clearForm() {
  emptyInputs();
  restorePlaceholders();
  handleCheckBoxAndBtn();
  showSentMessage();
}

/**
 * Empties all input fields in the contact form.
 */
function emptyInputs() {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const textarea = document.getElementById("message");
  nameField.value = "";
  emailField.value = "";
  textarea.value = "";
}

/**
 * Restores the default placeholders for all contact‑form fields
 * based on the current language.
 */
function restorePlaceholders() {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const textarea = document.getElementById("message");
  nameField.placeholder = domInfo[currentLang].contactFormNamePlaceholder;
  emailField.placeholder = domInfo[currentLang].contactFormMailPlaceholder;
  textarea.placeholder = domInfo[currentLang].contactFormTextareaPlaceholder;
}

/**
 * Resets the checkbox and disables the submit button
 * after the form has been successfully submitted.
 */
function handleCheckBoxAndBtn() {
  const checkbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit_msg");
  checkbox.classList.remove("checked");
  submitBtn.disabled = true;
}

/**
 * Displays a temporary success message after sending the form.
 */
function showSentMessage() {
  const msgBox = document.getElementById("error_msg_container");
  msgBox.textContent = domInfo[currentLang].contactPrivacyPolicySuccess;
  msgBox.classList.add("success-message");

  setTimeout(() => {
    msgBox.textContent = "";
    msgBox.classList.remove("success-message");
  }, 2000);
}
