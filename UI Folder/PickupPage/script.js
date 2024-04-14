function searchBooking() {
    var bookingId = document.getElementById("bookingIdInput").value;
    if (bookingId.trim() === "B123") {
        // Check if the pickup_schedule.txt file exists
        fetch('pickup_schedule.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error('pickup_schedule.txt not found');
                }
                return response.text();
            })
            .then(data => {
                // Display the saved date and time in a pop-up message
                alert("Scheduled pickup: " + data);
            })
            .catch(error => {
                // If pickup_schedule.txt doesn't exist or any other error occurs
                alert("Officer should have option to search with Booking ID based on the result officer should able to provide a date and time after consultation with Customer");
                document.getElementById("scheduleForm").classList.add("hidden");
            });
    } else {
        alert("Officer should have option to search with Booking ID based on the result officer should able to provide a date and time after consultation with Customer");
        document.getElementById("scheduleForm").classList.add("hidden");
    }
}


function saveSchedule() {
    var dateTime = document.getElementById("dateTimeInput").value;
    if (dateTime.trim() !== "") {
        // Perform validation checks
        // For demonstration purposes, assume validation passes
        var data = "Scheduled pickup for: " + dateTime;

        // Create a Blob containing the data
        var blob = new Blob([data], { type: "text/plain" });

        // Create a URL for the Blob
        var url = URL.createObjectURL(blob);

        // Create a link element
        var link = document.createElement("a");
        link.href = url;
        link.download = "pickup_schedule.txt"; // Specify the filename
        link.style.display = "none";

        // Append the link to the body and trigger the download
        document.body.appendChild(link);
        link.click();

        // Clean up
        URL.revokeObjectURL(url);

        alert("Schedule saved successfully!");
    } else {
        alert("Please select a date and time for pickup.");
    }
}
