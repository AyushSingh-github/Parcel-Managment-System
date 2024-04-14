document.addEventListener('DOMContentLoaded', function() {
    // Function to handle logout
    document.getElementById('logoutBtn').addEventListener('click', function() {
        // Perform logout actions here, e.g., redirect to login page
        console.log('Logged out');
    });

    // Function to handle payment
    document.getElementById('payNowBtn').addEventListener('click', function() {
        // Redirect to card details entry screen
        console.log('Redirecting to card details entry screen');
        // You can use window.location.href = 'card-entry.html'; to redirect to another page
    });

    // Function to handle back to home button
    document.getElementById('backToHomeBtn').addEventListener('click', function() {
        // Redirect to booking service page
        console.log('Redirecting to booking service page');
        // You can use window.location.href = 'booking-service.html'; to redirect to booking service page
    });
});
