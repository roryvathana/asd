function validateLogin(event) {
  // Prevent the default form submission behavior
  if (event) event.preventDefault();

  // Get the input values
  const username = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  // Check credentials
  if (username === "admin" && password === "admin") {
    const message = document.getElementById("message");
    message.style.color = "green";
    message.textContent = "Login successful!";

    // Start countdown after showing success message
    let countdown = 3; // Starting countdown value
    const countdownInterval = setInterval(() => {
      if (countdown > 0) {
        message.textContent = `Loading... ${countdown}`;
        countdown--;
      } else {
        clearInterval(countdownInterval); // Stop the countdown
        window.location.href = "welcome.html"; // Redirect to welcome.html
      }
    }, 1000); // Update every second

    return false; // Prevent the form from submitting
  } else {
    // Display error message
    const message = document.getElementById("message");
    message.style.color = "red";
    message.textContent = "Incorrect username or password!";
    return false; // Prevent form submission
  }
}
