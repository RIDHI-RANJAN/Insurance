// Dummy Data
const policies = [
  { policyId: 101, policyType: "Full Insurance", premiumAmount: 1000, fromDate: "2022-03-01", toDate: "2023-03-01", underwriterId: 1 },
  { policyId: 102, policyType: "Third Party", premiumAmount: 1500, fromDate: "2022-06-01", toDate: "2023-06-01", underwriterId: 2 },
  { policyId: 103, policyType: "Full Insurance", premiumAmount: 1200, fromDate: "2022-09-01", toDate: "2023-09-01", underwriterId: 1 }
];

// Show specific form (Update, Renew, View)
function showForm(formType) {
  document.getElementById('updatePolicyForm').style.display = formType === 'updatePolicyForm' ? 'block' : 'none';
  document.getElementById('renewPolicyForm').style.display = formType === 'renewPolicyForm' ? 'block' : 'none';
  document.getElementById('viewPolicyForm').style.display = formType === 'viewPolicyForm' ? 'block' : 'none';

  document.getElementById('updateDetails').style.display = 'none';
  document.getElementById('renewDetails').style.display = 'none';
  document.getElementById('viewDetails').style.display = 'none';
  document.getElementById('viewError').style.display = 'none';
}

// Fetch Policy for Update
function fetchPolicyForUpdate() {
  const policyId = document.getElementById('updatePolicyId').value;
  const policy = policies.find(p => p.policyId == policyId);
  
  if (policy) {
    document.getElementById('updateExistingDetails').innerHTML = `
      Policy ID: ${policy.policyId}<br>
      Policy Type: ${policy.policyType}<br>
      Premium Amount: $${policy.premiumAmount}<br>
      From Date: ${policy.fromDate}<br>
      To Date: ${policy.toDate}<br>
    `;
    
    if (policy.policyType === "Full Insurance") {
      document.getElementById('updateMessage').textContent = "Press U to update the insurance type from full insurance to third party";
      document.getElementById('updateOptions').style.display = 'block';
    } else {
      document.getElementById('updateMessage').textContent = "No update available from Third Party to Full Insurance.";
      document.getElementById('updateOptions').style.display = 'none';
    }
    document.getElementById('updateDetails').style.display = 'block';
  } else {
    alert("Policy not found.");
  }
}

// Update Policy Type
function updatePolicyType() {
  const policyId = document.getElementById('updatePolicyId').value;
  const policy = policies.find(p => p.policyId == policyId);
  
  if (policy && policy.policyType === "Full Insurance") {
    const userChoice = prompt("Enter U to update the policy type to Third Party:");
    
    if (userChoice.toUpperCase() === "U") {
      policy.policyType = "Third Party";  // Update policy type
      alert("Policy updated successfully!");
      showForm('updatePolicyForm');
    } else {
      alert("Invalid choice!");
    }
  }
}

// Fetch Policy for Renewal
function fetchPolicyForRenewal() {
  const policyId = document.getElementById('renewPolicyId').value;
  const policy = policies.find(p => p.policyId == policyId);
  
  if (policy) {
    document.getElementById('renewExistingDetails').innerHTML = `
      Policy ID: ${policy.policyId}<br>
      Policy Type: ${policy.policyType}<br>
      Premium Amount: $${policy.premiumAmount}<br>
      From Date: ${policy.fromDate}<br>
      To Date: ${policy.toDate}<br>
    `;
    
    document.getElementById('renewOptions').style.display = 'block';
    document.getElementById('renewDetails').style.display = 'block';
  } else {
    alert("Policy not found.");
  }
}

// Renew Policy
function renewPolicy() {
  const policyId = document.getElementById('renewPolicyId').value;
  const policy = policies.find(p => p.policyId == policyId);
  
  if (policy) {
    // Calculate new dates
    const currentDate = new Date();
    const toDate = new Date(policy.toDate);
    
    let newFromDate;
    let newToDate;
    
    if (currentDate > toDate) {
      // If expired, set new dates from current date
      newFromDate = currentDate;
      newToDate = new Date(currentDate.setFullYear(currentDate.getFullYear() + 1));
    } else {
      // If not expired, renew from existing to date + 1 year
      newFromDate = new Date(toDate.setDate(toDate.getDate() + 1));
      newToDate = new Date(newFromDate.setFullYear(newFromDate.getFullYear() + 1));
    }
    
    // Update the policy with new dates and premium
    policy.fromDate = newFromDate.toISOString().split('T')[0];
    policy.toDate = newToDate.toISOString().split('T')[0];
    
    alert("Policy renewed successfully!");
    showForm('renewPolicyForm');
  }
}

// Fetch Policy for Viewing (View Policy)
function fetchPolicyForView() {
  const policyId = document.getElementById('viewPolicyId').value;
  const policy = policies.find(p => p.policyId == policyId);
  
  if (policy) {
    document.getElementById('viewExistingDetails').innerHTML = `
      Policy ID: ${policy.policyId}<br>
      Policy Type: ${policy.policyType}<br>
      Premium Amount: $${policy.premiumAmount}<br>
      From Date: ${policy.fromDate}<br>
      To Date: ${policy.toDate}<br>
    `;
    document.getElementById('viewDetails').style.display = 'block';
    document.getElementById('viewError').style.display = 'none';
  } else {
    document.getElementById('viewError').style.display = 'block';
    document.getElementById('viewDetails').style.display = 'none';
  }
}
