<script>
  document.addEventListener("DOMContentLoaded", function() {
    let signupForm = document.querySelector("form");

    signupForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission to test functionality

      const email = signupForm.querySelector("input[type='email']").value;
      
      if (validateEmail(email)) {
        alert("Thank you for signing up! We'll be in touch.");
        // You can handle real submission here, e.g., AJAX or redirect
      } else {
        alert("Please enter a valid email address.");
      }
    });

    function validateEmail(email) {
      // Simple email regex for validation
      let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }
  });
</script>
