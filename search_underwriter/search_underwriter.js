document.getElementById("searchBtn").addEventListener("click", function() {
    var underwriterId = document.getElementById("underwriterId").value;
  
    // Simple validation to ensure the ID is provided
    if (underwriterId === "") {
      alert("Please enter a valid Underwriter ID.");
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
      resultMessage.style.color = "#2ecc71";  // Green for success
      resultMessage.innerHTML = `
        <strong>Underwriter Found:</strong><br>
        Name: ${foundUnderwriter.name}<br>
        DOB: ${foundUnderwriter.dob}<br>
        Joining Date: ${foundUnderwriter.joiningDate}<br>
        Password: ${foundUnderwriter.password}
      `;
    } else {
      resultMessage.style.color = "#e74c3c";  // Red for error
      resultMessage.innerHTML = "No Such Underwriter Exists with the Given ID.";
    }
  
    resultMessage.style.display = "block";
  });
  
  // Back Button Action
  document.getElementById("back-btn").addEventListener("click", function() {
    window.location.href = "manage_underwriter.html"; // Redirect to Manage Underwriter page
  });
  