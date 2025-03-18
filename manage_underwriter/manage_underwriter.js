document.addEventListener("DOMContentLoaded", function() {
    const registerUnderwriterBtn = document.getElementById("register-underwriter");
    const searchUnderwriterBtn = document.getElementById("search-underwriter");
    const updatePasswordBtn = document.getElementById("update-password");
    const deleteUnderwriterBtn = document.getElementById("delete-underwriter");
    const viewAllUnderwritersBtn = document.getElementById("view-all-underwriters");
    const viewVehiclesBtn = document.getElementById("view-vehicles");
    const backBtn = document.getElementById("back-btn");
  
    // Navigate to Underwriter Registration page
    registerUnderwriterBtn.addEventListener("click", function() {
      window.location.href = "underwriter_registration.html";
    });
  
    // Handle search by ID
    searchUnderwriterBtn.addEventListener("click", function() {
      alert("Search Underwriter by ID (functionality to be implemented)");
    });
  
    // Handle update password
    updatePasswordBtn.addEventListener("click", function() {
      alert("Update Underwriter Password (functionality to be implemented)");
    });
  
    // Handle delete underwriter
    deleteUnderwriterBtn.addEventListener("click", function() {
      alert("Delete Underwriter by ID (functionality to be implemented)");
    });
  
    // Handle view all underwriters
    viewAllUnderwritersBtn.addEventListener("click", function() {
      alert("View All Underwriters (functionality to be implemented)");
    });
  
    // Handle view all vehicles by underwriter ID
    viewVehiclesBtn.addEventListener("click", function() {
      alert("View All Vehicles by Underwriter ID (functionality to be implemented)");
    });
  
    // Go back to the Role Selection screen (US001)
    backBtn.addEventListener("click", function() {
      window.location.href = "index.html";
    });
  });
  