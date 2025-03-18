document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const submitBtn = document.getElementById('submit-btn');
    const backBtn = document.getElementById('back-btn');
    const errorMessage = document.getElementById('error-message');
  
    // Handle form submission
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const dob = document.getElementById('dob').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const address = document.getElementById('address').value;
      const password = document.getElementById('password').value;
  
      // Validate the form fields
      if (!name || !dob || !email || !phone || !address || !password || !isAlphanumeric(password)) {
        errorMessage.classList.remove('hidden');
        return;
      }
  
      // If validation passes, show success message
      errorMessage.classList.add('hidden');
      alert('Underwriter registered successfully!');
  
      // Reset the form
      form.reset();
    });
  
    // Go back to the Role Selection page
    backBtn.addEventListener('click', () => {
      window.location.href = "index.html"; // Make sure this is the correct path to your homepage
    });
  
    // Function to check if password is alphanumeric
    function isAlphanumeric(str) {
      const regex = /^[a-z0-9]+$/i;
      return regex.test(str);
    }
  });
  