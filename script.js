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
  console.log("Form submitted!");
});

form.addEventListener("submit", function (event) {
  nameError.textContent = "";

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name";
    event.preventDefault();
  }
});
form.addEventListener("submit", function (event) {
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

function validateEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(String(email));
}
form.addEventListener("submit", function (event) {
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

//Location

const locationButton = document.getElementById("get-location-btn");

if (locationButton) {
  locationButton.addEventListener("click", getLocation);
}

function getLocation() {
  const locationElement = document.getElementById("location");

  if (navigator.geolocation) {
    locationElement.innerHTML = "Getting location...";

    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    locationElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  const locationElement = document.getElementById("location");

  locationElement.innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`;
}

function showError(error) {
  const locationElement = document.getElementById("location");

  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationElement.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      locationElement.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      locationElement.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      locationElement.innerHTML = "An unknown error occurred.";
      break;
  }
  console.error("Geolocation error: ${error.message}");
}
