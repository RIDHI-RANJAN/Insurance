<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Underwriter Login - Star Protect Vehicle</title>
  
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Poppins:wght@400;600&display=swap" rel="stylesheet">

  <!-- Font Awesome (for icons) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

  <link rel="stylesheet" href="underwriter_login.css">
</head>
<body>
  <div class="container">
    <h1>Underwriter Login</h1>
    <p class="description">Please enter your User ID and Password to log in</p>

    <!-- Underwriter Login Form -->
    <div class="form-group">
      <label for="userId">User ID:</label>
      <input type="text" id="userId" placeholder="Enter your User ID" required />
    </div>

    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" placeholder="Enter your password" required />
    </div>

    <button id="loginBtn" class="menu-btn">
      <i class="fas fa-sign-in-alt"></i> Log In
    </button>

    <div id="resultMessage" class="result-message"></div>

    <button id="back-btn" class="back-btn">
      <i class="fas fa-arrow-left"></i> Back to User Role Choosing Screen
    </button>
  </div>

  <script src="underwriter_login.js"></script>
</body>
</html>
