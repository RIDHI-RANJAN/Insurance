document.getElementById('vehicleType').addEventListener('change', function() {
    calculatePremiumAmount();
  });
  
  document.getElementById('fromDate').addEventListener('change', function() {
    calculateToDate();
  });
  
  function calculatePremiumAmount() {
    const vehicleType = document.getElementById('vehicleType').value;
    let premiumAmt = 0;
  
    if (vehicleType === '2-wheeler') {
      premiumAmt = 2500;
    } else if (vehicleType === '4-wheeler') {
      premiumAmt = 6500;
    }
  
    document.getElementById('premiumAmt').value = premiumAmt;
  }
  
  function calculateToDate() {
    const fromDate = document.getElementById('fromDate').value;
    if (fromDate) {
      let date = new Date(fromDate);
      date.setFullYear(date.getFullYear() + 1);
      document.getElementById('toDate').value = date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    }
  }
  
  document.getElementById('registerVehicleBtn').addEventListener('click', function() {
    // Add validation and data submission logic here
    
    let vehicleNo = document.getElementById('vehicleNo').value;
    let vehicleType = document.getElementById('vehicleType').value;
    let customerName = document.getElementById('customerName').value;
    let engineNo = document.getElementById('engineNo').value;
    let chasisNo = document.getElementById('chasisNo').value;
    let phoneNo = document.getElementById('phoneNo').value;
    let insuranceType = document.getElementById('insuranceType').value;
    let fromDate = document.getElementById('fromDate').value;
    let premiumAmt = document.getElementById('premiumAmt').value;
  
    // Additional validation logic
    if (vehicleNo && customerName && engineNo && chasisNo && phoneNo && fromDate) {
      document.getElementById('resultMessage').innerHTML = "Vehicle Insurance Registered Successfully!";
      document.getElementById('resultMessage').style.display = 'block';
    } else {
      document.getElementById('resultMessage').innerHTML = "Please fill in all the fields correctly.";
      document.getElementById('resultMessage').style.display = 'block';
    }
  });
  