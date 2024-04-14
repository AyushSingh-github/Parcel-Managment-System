document.getElementById('trackingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var customerId = document.getElementById('customerId').value;
    var bookingId = document.getElementById('bookingId').value;
    // Here you would make an AJAX request to fetch package status based on the customer ID and booking ID
    // For demonstration purposes, let's just display a dummy message
    var statusMessage = "Package status for Customer ID: " + customerId + " and Booking ID: " +
        bookingId + " is: In Transit";
    document.getElementById('statusInfo').textContent = statusMessage;
    document.getElementById('packageStatus').style.display = 'block';
});



//DUMMY data
// document.getElementById("trackingForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior

//     // Get the values of customer ID and booking ID from the input fields
//     var customerId = document.getElementById("customerId").value;
//     var bookingId = document.getElementById("bookingId").value;

//     // Dummy data for package status
//     var dummyData = [
//         { customerId: "C123", bookingId: "B456", status: "Shipped" },
//         { customerId: "C456", bookingId: "B789", status: "In Transit" },
//         { customerId: "C789", bookingId: "B123", status: "Delivered" }
//     ];

//     // Find the package with matching customer ID and booking ID
//     var package = dummyData.find(function(item) {
//         return item.customerId === customerId && item.bookingId === bookingId;
//     });

//     // Display the status on the page
//     var statusDisplay = document.getElementById("statusInfo");
//     if (package) {
//         statusDisplay.innerHTML = "Status: " + package.status;
//     } else {
//         statusDisplay.innerHTML = "No package found with the provided details.";
//     }
// });
