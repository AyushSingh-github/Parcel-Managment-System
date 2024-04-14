document.getElementById("login").addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  var userId = document.getElementById("userId").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("errorMessage");

  // Validate user ID length
  if (userId.length < 5 || userId.length > 20) {
    alert("User ID must be between 5 and 20 characters.");
    return;
  }

  // Validate password complexity
  var hasUppercase = /[A-Z]/.test(password);
  var hasLowercase = /[a-z]/.test(password);
  var hasDigit = /\d/.test(password);
  var hasSpecialChar = /[@$!%*?&]/.test(password);
  var passwordLength = password.length;

  if (
    !(hasUppercase && hasLowercase && hasDigit && hasSpecialChar) ||
    passwordLength < 1 ||
    passwordLength > 30
  ) {
    alert(
      "Password must have at least one uppercase letter, one lowercase letter, one digit, one special character, and be between 1 and 30 characters long."
    );
    return;
  }

  // If validation passes, redirect the user to the registration page
  window.location.href = "registration.html";
});
