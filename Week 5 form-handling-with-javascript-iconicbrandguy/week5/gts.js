document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('regForm');
    
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const roleError = document.getElementById('roleError');
    
    const summarySection = document.getElementById('formSummary');
    const summaryContent = document.getElementById('summaryContent');

    // Regex pattern for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Real-time validation for email
    document.getElementById('email').addEventListener('input', function() {
        validateEmail();
    });

    form.addEventListener('submit', function(event) { // Or document.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        // Validate fields and only proceed if valid
        const isValid = validateForm();

        if (isValid) {
            const formData = captureFormData();
            displayFormSummary(formData);
            displayConfirmationMessage();
        }
    });

    // Capture form data in an object
    function captureFormData() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;
        const subscribe = document.getElementById('subscribe').checked;

        return {
            email,
            password,
            role,
            subscribe: subscribe ? 'Yes' : 'No'
        };
    }

    // Display form data in the summary section
    function displayFormSummary(data) {
        summaryContent.innerHTML = `
            <strong>Email:</strong> ${data.email} <br>
            <strong>Role:</strong> ${data.role} <br>
            <strong>Subscribed:</strong> ${data.subscribe}
        `;
        summarySection.style.display = 'block';
    }

    // Display confirmation message after form submission
    function displayConfirmationMessage() {
        alert('Form submitted successfully!');
    }

    // Validate form fields
    function validateForm() {
        let valid = true;

        // Clear previous errors
        emailError.innerHTML = '';
        passwordError.innerHTML = '';
        roleError.innerHTML = '';

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        // Validate email
        if (!emailPattern.test(email)) {
            emailError.innerHTML = 'Please enter a valid email address';
            valid = false;
        }

        // Validate password (at least 6 characters)
        if (password.length < 6) {
            passwordError.innerHTML = 'Password must be at least 6 characters long';
            valid = false;
        }

        // Validate role selection
        if (!role) {
            roleError.innerHTML = 'Please select a role';
            valid = false;
        }

        return valid;
    }

    // Real-time email validation
    function validateEmail() {
        const email = document.getElementById('email').value;
        if (!emailPattern.test(email)) {
            emailError.innerHTML = 'Invalid email format';
        } else {
            emailError.innerHTML = '';
        }
    }
});
