// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const emailErrorMessage = document.getElementById('email-error');
    const passwordErrorMessage = document.getElementById('password-error');
    const emailLabel = document.getElementById('floating-label-username');
    const passwordLabel = document.getElementById('floating-label-password');
    const initialPlaceholder = emailInput.getAttribute('data-placeholder');
    const submitButton = document.getElementById("submitButton");


  // Function to validate email format
  function isEmailValid(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  emailInput.addEventListener("blur", function () {
    const emailValue = emailInput.value.trim();
    let hasError = false;
 

    if (!emailValue) {
      hasError = true;
        emailInput.setAttribute('placeholder', initialPlaceholder);
      emailErrorMessage.style.display = "block";
      emailInput.style.borderColor = "#ff444f";
      emailLabel.style.color = "#ff444f";
      emailErrorMessage.innerText = "Email is required.";
    } else {
        
      emailErrorMessage.style.display = "none";
      emailInput.style.borderColor = "#d6dadb";
      emailLabel.style.color = "#d6dadb"; 

      if (!isEmailValid(emailValue)) {
        hasError = true;
        emailErrorMessage.innerText = "That doesn't look like an email address.";
        emailErrorMessage.style.display = "block";
        emailInput.style.borderColor = "#ff444f";
        emailLabel.style.color = "#ff444f";
      } else {
        emailInput.removeAttribute('placeholder'); 
        emailErrorMessage.style.display = "none";
        emailInput.style.borderColor = "#d6dadb"; 
        emailLabel.style.color = "#d6dadb"; 
      }
    }

    if (!emailValue && (emailErrorMessage.innerText === "Email is required.")) {
      hasError = true;
        emailInput.removeAttribute('placeholder'); 
        emailInput.addEventListener("click", function () {
            emailInput.setAttribute('placeholder', initialPlaceholder);
          });
    }

    if (hasError) {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }


  });


  emailInput.addEventListener("focus", function () {
    emailInput.removeAttribute('placeholder');
  });


  passwordInput.addEventListener("blur", function () {
    if (!passwordInput.value.trim()) {
      passwordErrorMessage.style.display = "block";
      passwordInput.style.borderColor = "#ff444f";
      passwordLabel.style.color = "#ff444f"; 
    } else {
      passwordErrorMessage.style.display = "none";
      passwordInput.style.borderColor = "#d6dadb"; 
      passwordLabel.style.color = "#d6dadb"; 
    }
  });

  const passwordField = document.querySelector('input[type="password"]');
const showPasswordImage = document.getElementById("showPassword");
const hidePasswordImage = document.getElementById("hidePassword");


showPasswordImage.addEventListener("click", function () {
  passwordField.type = "text"; 
  showPasswordImage.style.display = "none"; 
  hidePasswordImage.style.display = "inline"; 

});

hidePasswordImage.addEventListener("click", function () {
  passwordField.type = "password";
  hidePasswordImage.style.display = "none"; 
  showPasswordImage.style.display = "inline";

});

});
