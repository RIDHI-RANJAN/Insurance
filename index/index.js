// Role buttons event listeners
document.getElementById('admin-btn').addEventListener('click', function() {
    showLoginForm('admin');
  });
  
  document.getElementById('underwriter-btn').addEventListener('click', function() {
    showLoginForm('underwriter');
  });
  
  // Carousel functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide img');
  const totalSlides = slides.length;
  
  document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  });
  
  document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });
  
  function updateCarousel() {
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
  }
  
  // Back to homepage button functionality
  document.getElementById('back-btn').addEventListener('click', function() {
    window.location.href = 'index.html'; // Return to homepage
  });
  
  // Form validation
  document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault();
    
    const userId = document.getElementById('userId').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');
    
    if (!userId || !password) {
      errorMessage.textContent = 'Both fields are required.';
      errorMessage.classList.remove('hidden');
      return;
    }
  
    if (userId === 'admin' && password === 'admin123') {
      alert('Admin login successful');
      window.location.href = 'admin_dashboard.html'; // Redirect to Admin Dashboard
    } else if (userId && password) {
      alert('Underwriter login successful');
      window.location.href = 'underwriter_dashboard.html'; // Redirect to Underwriter Dashboard
    } else {
      errorMessage.textContent = 'Invalid credentials, please try again.';
      errorMessage.classList.remove('hidden');
    }
  });
  
  function showLoginForm(role) {
    document.querySelector('.role-selection').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('error-message').classList.add('hidden');
  }
  