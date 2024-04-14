document.addEventListener("DOMContentLoaded", function () {
    // Replace "username" with the actual username obtained after login
    document.getElementById("username").textContent = "Ayush Singh";
    // Logout functionality
    const logoutLink = document.getElementById("logout").querySelector('a'); // Get the <a> element inside the logout <li>
    logoutLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        // Redirect to the login page
        window.location.href = "../LoginPage/index.html";
    });

    // Check the user role
    // Assuming officerRole is a variable indicating whether the user is an officer or not
    const officerRole = true; // Change this to reflect the user's role

    // Get the pickup scheduling link element
    const pickupSchedulingLink = document.getElementById('pickup-scheduling-link');

    // If the user is an officer, display the pickup scheduling link
    if (officerRole) {
        pickupSchedulingLink.style.display = 'inline';
    }
});
