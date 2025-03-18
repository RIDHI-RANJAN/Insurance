document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registration-form');
  const errorMessage = document.getElementById('error-message');
  const passwordInput = document.getElementById('password');
  const dobInput = document.getElementById('dob');
  const passwordStrength = document.getElementById('password-strength');

  form.addEventListener('submit', (event) => {
      event.preventDefault();
      errorMessage.classList.add('hidden'); // Hide previous errors
      errorMessage.style.display = "none";  // Ensure it's hidden initially

      const name = document.getElementById('name').value.trim();
      const dob = document.getElementById('dob').value;
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const address = document.getElementById('address').value.trim();
      const password = document.getElementById('password').value;

      // Name Validation
      if (!isValidName(name)) {
          showError("Name must only contain letters and spaces!");
          return;
      }

      // Phone Number Validation
      if (!isValidPhone(phone)) {
          showError("Phone number must be exactly 10 digits and contain only numbers!");
          return;
      }

      // Empty Field Validation
      if (!name || !dob || !email || !phone || !address || !password) {
          showError("All fields are required!");
          return;
      }

      // Age Validation (18+)
      if (!isValidAge(dob)) {
          showError("Underwriter must be at least 18 years old!");
          return;
      }

      // Password Validation
      if (!isValidPassword(password)) {
          showError("Password must include letters, numbers, and special characters!");
          return;
      }

      alert('Underwriter registered successfully!');
      form.reset();
      passwordStrength.textContent = "";
  });

  passwordInput.addEventListener('input', () => {
      const strength = getPasswordStrength(passwordInput.value);
      passwordStrength.textContent = strength.text;
      passwordStrength.style.color = strength.color;
  });

  function showError(message) {
      errorMessage.textContent = message;
      errorMessage.classList.remove('hidden');
      errorMessage.style.display = "block";  // ✅ Ensure it's visible
  }

  function isValidName(name) {
      return /^[a-zA-Z\s]+$/.test(name); // Allows only letters and spaces
  }

  function isValidPhone(phone) {
      return /^\d{10}$/.test(phone); // Ensures exactly 10 digits
  }

  function isValidAge(dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age >= 18;
  }

  function getPasswordStrength(password) {
      if (password.length < 6) {
          return { text: "Weak (too short)", color: "red" };
      }
      if (password.match(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/)) {
          return { text: "Medium (letters & numbers)", color: "orange" };
      }
      if (password.match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/)) {
          return { text: "Strong (includes special characters)", color: "green" };
      }
      return { text: "Weak", color: "red" };
  }

  function isValidPassword(password) {
      return password.match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/);
  }
});

