
// Mock data for demonstration
const bookingData = [
    {
        customerId: "C001", bookingId: "B001", bookingDate: "2024-04-01", receiverName: "Ayush Singh", deliveredAddress: "123 Mumbai", amountStatus: "Paid"
    },
    {
        customerId: "C002", bookingId: "B002", bookingDate: "2024-04-02", receiverName: "Parag", deliveredAddress: "890 Pune", amountStatus: "Pending"
    },
    // Add more mock data as needed
];
const username = "Officer"; // Replace with actual username
// Function to display booking details in the table
function displayBookingDetails(bookingDetails) {
    const tableBody = document.querySelector("#bookingTable tbody");
    tableBody.innerHTML = "";
    bookingDetails.forEach(booking => {
        const row = document.createElement("tr");
        row.innerHTML = `
    <td>${booking.customerId}</td>
    <td>${booking.bookingId}</td>
    <td>${booking.bookingDate}</td>
    <td>${booking.receiverName}</td>
    <td>${booking.deliveredAddress}</td>
    <td>${booking.amountStatus}</td>
    `;
        tableBody.appendChild(row);
    });
}
// Initial display of booking details
displayBookingDetails(bookingData);
// Event listener for search button
document.querySelector("#searchBtn").addEventListener("click", function () {
    // Fetch data based on search criteria and update table
    // Example: const customerId = document.querySelector("#customerID").value;
    // Update bookingData based on search criteria
    // displayBookingDetails(filteredData);
});
// Event listener for logout button
document.querySelector("#logoutBtn").addEventListener("click", function () {
    // Perform logout operation
    // Example: window.location.href = "logout.php";
});
// Update username in the header
document.querySelector("#username").textContent = username;
______________________________
// Function to fetch booking details from the server
async function fetchBookingDetails(customerId, startDate, endDate) {
    try {
        // Replace the URL with the actual endpoint for fetching booking details
        const response = await
            fetch(`fetch_booking_details.php?customerId=${customerId}&startDate=${startDate}&endDate=
    ${endDate}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching booking details:', error);
        return [];
    }
}
// Function to update table with fetched booking details
async function updateTable(customerId, startDate, endDate) {
    const bookingDetails = await fetchBookingDetails(customerId, startDate, endDate);
    displayBookingDetails(bookingDetails);
}
// Event listener for search button
document.querySelector("#searchBtn").addEventListener("click", function () {
    const customerId = document.querySelector("#customerID").value;
    const startDate = document.querySelector("#startDate").value;
    const endDate = document.querySelector("#endDate").value;
    updateTable(customerId, startDate, endDate);
});