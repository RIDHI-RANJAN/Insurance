document.getElementById("deleteBtn").addEventListener("click", function() {
    var underwriterId = document.getElementById("underwriterId").value;
  
    // Simple validation to ensure the field is filled
    if (underwriterId === "") {
      alert("Please enter an Underwriter ID.");
      return;
    }
  
    // Simulate a search and delete operation (In a real application, this would be a database query)
    var underwriters = [
      { id: 1, name: "John Doe", dob: "1990-01-01", joiningDate: "2020-06-15", password: "john123" },
      { id: 2, name: "Jane Smith", dob: "1985-04-22", joiningDate: "2018-11-10", password: "jane123" },
      { id: 3, name: "David Brown", dob: "1980-09-30", joiningDate: "2015-03-01", password: "david123" }
    ];
  
    var foundUnderwriter = underwriters.find(underwriter => underwriter.id == underwriterId);
    var resultMessage = document.getElementById("resultMessage");
  
    if (foundUnderwriter) {
      // Simulate deleting the underwriter (in real app, this would delete from DB)
      var index = underwriters.indexOf(foundUnderwriter);
      underwriters.splice(index, 1);
  
      resultMessage.style.color = "#2ecc71";  // Green for success
      resultMessage.innerHTML = `Underwriter with Id: ${underwriterId} is deleted.`;
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
  