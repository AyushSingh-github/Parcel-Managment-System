document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  showSuccessMessage();
  redirectToHomePage();
});

function showSuccessMessage() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('successMessage').style.display = 'block';
}

function redirectToHomePage() {
  setTimeout(function() {
      window.location.href = "../HomePage/index.html";
  }, 3000); // Redirect after 3 seconds (adjust as needed)
}
