document.addEventListener("DOMContentLoaded", function () {
    const usernameSpan = document.getElementById("username");
    const logoutBtn = document.getElementById("logoutBtn");
    // Mocking user data
    const userData = {
        username: "Ayush Singh"
    };
    // Display username
    usernameSpan.textContent = userData.username;
    // Logout functionality
    logoutBtn.addEventListener("click", function () {
        // Perform logout actions here, e.g., redirect to login page
        alert("Logging out...");
        // For demo purposes, just reload the page
        location.reload();
    });
});