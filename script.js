const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});
form.addEventListener("submit", function (event) {
  // Clear any previous error messages
  nameError.textContent = "";

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name";
    event.preventDefault(); // Prevent form submission
  }
});
form.addEventListener("submit", function (event) {
  // Clear any previous error messages
  nameError.textContent = "";
  emailError.textContent = "";

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name";
    event.preventDefault();
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Please enter your email";
    event.preventDefault();
  } else if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address";
    event.preventDefault();
  }
});

// Function to validate email format
function validateEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(String(email));
}
form.addEventListener("submit", function (event) {
  // Clear any previous error messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name";
    event.preventDefault();
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Please enter your email";
    event.preventDefault();
  } else if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address";
    event.preventDefault();
  }

  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "Please enter your password";
    event.preventDefault();
  } else if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters";
    event.preventDefault();
  }
});
passwordInput.addEventListener("input", function () {
  if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password is too short";
    passwordError.style.color = "red";
  } else {
    passwordError.textContent = "Password is strong enough";
    passwordError.style.color = "green";
  }
});
