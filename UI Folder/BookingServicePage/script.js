document.addEventListener('DOMContentLoaded', function() {
    // Mock login type for demonstration
    var loginType = "officer"; // Change this to "customer" or "officer" based on actual login type
  
    // Function to populate sender information based on login type
    function populateSenderInformation(loginType) {
      var senderInfoSection = document.getElementById('sender-info-section');
      senderInfoSection.innerHTML = ''; // Clear previous content
  
      var senderInfoHtml = '';
  
      if (loginType === "customer") {
        // Pre-populated sender information for customers
        senderInfoHtml += `
          <h2>Sender Information :</h2>
          <div class="form-group">
            <label for="pre-sender-name">Name:</label>
            <input type="text" id="pre-sender-name" value="John Doe" readonly>
          </div>
          <div class="form-group">
            <label for="pre-sender-address">Address:</label>
            <input type="text" id="pre-sender-address" value="123 Main St, City, Country" readonly>
          </div>
          <div class="form-group">
            <label for="pre-sender-contact">Contact details:</label>
            <input type="text" id="pre-sender-contact" value="john@example.com" readonly>
          </div>
        `;
      } else if (loginType === "officer") {
        // Sender information section editable for officers
        senderInfoHtml += `
          <h2>Sender Information (Officer Entry):</h2>
          <div class="form-group">
            <label for="sender-name">Name:</label>
            <input type="text" id="sender-name">
          </div>
          <div class="form-group">
            <label for="sender-address">Address:</label>
            <input type="text" id="sender-address">
          </div>
          <div class="form-group">
            <label for="sender-contact">Contact details:</label>
            <input type="text" id="sender-contact">
          </div>
        `;
      }
  
      senderInfoSection.innerHTML = senderInfoHtml;
    }
  
    // Call the function to populate sender information based on login type
    populateSenderInformation(loginType);
  
    // Add event listener to submit button
    document.getElementById('submit-button').addEventListener('click', function() {
      // Validation and submission logic here
    });
  });
  