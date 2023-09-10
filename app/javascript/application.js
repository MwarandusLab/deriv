// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const emailErrorMessage = document.getElementById('email-error');
    const passwordErrorMessage = document.getElementById('password-error');
    const openEyeIcon = document.getElementById('open-eye');
    const closedEyeIcon = document.getElementById('closed-eye');
    const emailLabel = document.getElementById('floating-label-username');
    const passwordLabel = document.getElementById('floating-label-password');
    const initialPlaceholder = emailInput.getAttribute('data-placeholder');

  // Function to validate email format
  function isEmailValid(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  emailInput.addEventListener("blur", function () {
    const emailValue = emailInput.value.trim();
 

    if (!emailValue) {
        emailInput.setAttribute('placeholder', initialPlaceholder);
      emailErrorMessage.style.display = "block";
      emailInput.style.borderColor = "#ff444f";
      emailLabel.style.color = "#ff444f"; // Change label color to red
      emailErrorMessage.innerText = "Email is required.";
    } else {
        
      emailErrorMessage.style.display = "none";
      emailInput.style.borderColor = "#d6dadb"; // Reset input border color
      emailLabel.style.color = "#d6dadb"; // Reset label color

      if (!isEmailValid(emailValue)) {
        emailErrorMessage.innerText = "That doesn't look like an email address.";
        emailErrorMessage.style.display = "block";
        emailInput.style.borderColor = "#ff444f";
        emailLabel.style.color = "#ff444f"; // Change label color to red
      } else {
        emailInput.removeAttribute('placeholder'); 
        emailErrorMessage.style.display = "none";
        emailInput.style.borderColor = "#d6dadb"; // Reset input border color
        emailLabel.style.color = "#d6dadb"; // Reset label color
      }
    }

    if (!emailValue && (emailErrorMessage.innerText === "Email is required.")) {
        emailInput.removeAttribute('placeholder'); 
        emailInput.addEventListener("click", function () {
            emailInput.setAttribute('placeholder', initialPlaceholder);
          });
    }
  });


  emailInput.addEventListener("focus", function () {
    emailInput.removeAttribute('placeholder');
  });


  passwordInput.addEventListener("blur", function () {
    if (!passwordInput.value.trim()) {
      passwordErrorMessage.style.display = "block";
      passwordInput.style.borderColor = "#ff444f";
      passwordLabel.style.color = "#ff444f"; // Change label color to red
    } else {
      passwordErrorMessage.style.display = "none";
      passwordInput.style.borderColor = "#d6dadb"; // Reset input border color
      passwordLabel.style.color = "#d6dadb"; // Reset label color
    }
  });


});
