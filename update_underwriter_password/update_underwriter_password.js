document.getElementById("updateBtn").addEventListener("click", function() {
    var underwriterId = document.getElementById("underwriterId").value;
    var newPassword = document.getElementById("newPassword").value;
  
    // Simple validation to ensure both fields are filled
    if (underwriterId === "" || newPassword === "") {
      alert("Please enter both Underwriter ID and new password.");
      return;
    }
  
    // Simulate a search operation (In a real application, this would be a database query)
    var underwriters = [
      { id: 1, name: "John Doe", dob: "1990-01-01", joiningDate: "2020-06-15", password: "john123" },
      { id: 2, name: "Jane Smith", dob: "1985-04-22", joiningDate: "2018-11-10", password: "jane123" },
      { id: 3, name: "David Brown", dob: "1980-09-30", joiningDate: "2015-03-01", password: "david123" }
    ];
  
    var foundUnderwriter = underwriters.find(underwriter => underwriter.id == underwriterId);
  
    var resultMessage = document.getElementById("resultMessage");
  
    if (foundUnderwriter) {
      // Check if password is alphanumeric
      var passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/; // Must contain alphabets and numbers
      if (!passwordPattern.test(newPassword)) {
        resultMessage.style.color = "#e74c3c";  // Red for error
        resultMessage.innerHTML = "Password criteria doesn't match, please enter a combination of alphabets and numeric values.";
      } else {
        foundUnderwriter.password = newPassword;  // Update password (in real case, it would be updated in the database)
        resultMessage.style.color = "#2ecc71";  // Green for success
        resultMessage.innerHTML = `Password updated for Id: ${underwriterId}`;
      }
    } else {
      resultMessage.style.color = "#e74c3c";  // Red for error
      resultMessage.innerHTML = "No Such Underwriter Exist with the Given ID.";
    }
  
    resultMessage.style.display = "block";
  });
  
  // Back Button Action
  document.getElementById("back-btn").addEventListener("click", function() {
    window.location.href = "manage_underwriter.html"; // Redirect to Manage Underwriter page
  });
  