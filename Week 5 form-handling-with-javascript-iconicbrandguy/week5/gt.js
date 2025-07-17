function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');

    // Clear previous error messages
    emailError.innerHTML = '';
    passwordError.innerHTML = '';

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;  // Email pattern
    let valid = true;

    // Validate email
    if (!emailPattern.test(email)) {
        emailError.innerHTML = 'Please enter a valid email address';
        valid = false;
    }

    // Validate password
    if (password.length < 6) {
        passwordError.innerHTML = 'Invalid password. Password must be at least 6 characters long';
        valid = false;
    }

    return valid; // If valid is false, form won't submit
}
