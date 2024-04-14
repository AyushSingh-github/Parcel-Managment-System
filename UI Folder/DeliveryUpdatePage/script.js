// function updateStatus(status) {
//     var bookingId = document.getElementById('bookingIdInput').value;
//     if (bookingId.trim() === '') {
//         document.getElementById('statusMessage').innerHTML = 'Please enter a Booking ID';
//     } else {
//         // Here you can send the booking ID and status to the server for updating the delivery status
//         document.getElementById('statusMessage').innerHTML = 'Status updated to: ' + status;
//     }
// }


function updateStatus(status) {
    document.getElementById("statusMessage").textContent = "Status: " + status;
    document.getElementById("statusMessage").classList.remove("hidden");
}
