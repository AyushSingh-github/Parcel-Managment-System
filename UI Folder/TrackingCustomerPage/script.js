function searchStatus() {
    var bookingId = document.getElementById("bookingId").value;
    // Here you would make an API call to retrieve the status based on the booking ID
    // For demonstration purposes, let's assume we have a hardcoded status
    var status = getStatus(bookingId);
    document.getElementById("statusDisplay").innerHTML = status;
}
function getStatus(bookingId) {
    // Hardcoded status for demonstration
    if (bookingId === "123") {
        return "Status: In transit";
    } else if (bookingId === "456") {
        return "Status: Delivered";
    } else {
        return "Status: Not found";
    }
}