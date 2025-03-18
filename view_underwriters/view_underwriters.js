// Dummy Data for UnderWriter and Vehicle
const underwriters = [
    { id: 1, name: "John Doe", dateOfJoining: "2020-01-15" },
    { id: 2, name: "Jane Smith", dateOfJoining: "2019-07-30" }
  ];
  
  const vehicles = [
    { underwriterId: 1, vehicleNumber: "ABC123", premiumAmount: 1000, fromDate: "2021-05-01", toDate: "2022-05-01" },
    { underwriterId: 1, vehicleNumber: "XYZ456", premiumAmount: 1200, fromDate: "2022-06-01", toDate: "2023-06-01" },
    { underwriterId: 2, vehicleNumber: "LMN789", premiumAmount: 1100, fromDate: "2021-09-15", toDate: "2022-09-15" }
  ];
  
  // Function to fetch vehicles by UnderWriter Id
  function fetchVehiclesByUnderWriterId() {
    const underwriterId = parseInt(document.getElementById('underwriterId').value);
    const underwriter = underwriters.find(uw => uw.id === underwriterId);
    const vehiclesForUnderwriter = vehicles.filter(v => v.underwriterId === underwriterId);
  
    const vehicleList = document.getElementById('vehicleList');
    const totalVehicles = document.getElementById('totalVehicles');
    const errorMessage = document.getElementById('error-message');
    const errorText = document.getElementById('errorText');
    const vehicleDetails = document.getElementById('vehicleDetails');
  
    if (!underwriter) {
      errorText.textContent = "Invalid UnderWriter Id";
      errorMessage.style.display = 'block';
      vehicleDetails.style.display = 'none';
    } else if (vehiclesForUnderwriter.length === 0) {
      errorText.textContent = "No Vehicle is insured by the UnderWriter";
      errorMessage.style.display = 'block';
      vehicleDetails.style.display = 'none';
    } else {
      vehicleList.innerHTML = "";
      vehiclesForUnderwriter.forEach(vehicle => {
        const li = document.createElement('li');
        li.textContent = `UnderWriter Id: ${underwriter.id}, UnderWriter Name: ${underwriter.name}, Vehicle Number: ${vehicle.vehicleNumber}, Premium Amount: ${vehicle.premiumAmount}, From Date: ${vehicle.fromDate}, To Date: ${vehicle.toDate}`;
        vehicleList.appendChild(li);
      });
      totalVehicles.textContent = `Total Vehicles Registered: ${vehiclesForUnderwriter.length}`;
      vehicleDetails.style.display = 'block';
      errorMessage.style.display = 'none';
    }
  }
  