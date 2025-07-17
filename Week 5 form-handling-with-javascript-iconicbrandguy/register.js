document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('regForm');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const ageError = document.getElementById('ageError');
    const genderError = document.getElementById('genderError');
    const countryError = document.getElementById('countryError');
    const summarySection = document.getElementById('formSummary');
    const summaryContent = document.getElementById('summaryContent');

    // Regex pattern for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Real-time validation for email
    document.getElementById('email').addEventListener('input', function() {
        validateEmail();
    });

    form.addEventListener('submit', function(event) {
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
        const age = document.getElementById('age').value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        const country = document.getElementById('country').value;
        const terms = document.getElementById('terms').checked;

        return {
            email,
            password,
            age,
            gender,
            country,
            terms: terms ? 'Yes' : 'No'
        };
    }

    // Display form data in the summary section
    function displayFormSummary(data) {
        summaryContent.innerHTML = `
            <strong>Email:</strong> ${data.email} <br>
            <strong>Age:</strong> ${data.age} <br>
            <strong>Gender:</strong> ${data.gender} <br>
            <strong>Country:</strong> ${data.country} <br>
            <strong>Terms:</strong> ${data.terms}
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
        confirmPasswordError.innerHTML = '';
        ageError.innerHTML = '';
        genderError.innerHTML = '';
        countryError.innerHTML = '';
        termsError.innerHTML = '';


        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const age = document.getElementById('age').value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value;    // querySelector
        const country = document.getElementById('country').value;
        const terms = document.querySelector('input[name="terms"]:checked')?.value; 

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

        // Validate password confirmation
        if (password !== confirmPassword) {
            confirmPasswordError.innerHTML = 'Passwords do not match';
            valid = false;
        }

        // Validate age (minimum 18 years old)
        if (age < 18) {
            ageError.innerHTML = 'You must be at least 18 years old';
            valid = false;
        }

        // Validate gender (must select)  ! means NOT
        if (!gender) {
            genderError.innerHTML = 'Please select a gender';
            valid = false;
        }

        if (!terms) {
            termsError.innerHTML = 'Please agree to our Terms and Conditions';
            valid = false;
        }

        // Validate role selection        ! means NOT
        if (!country) {
            countryError.innerHTML = 'Please select a country';
            valid = false;
        }

        return valid;
    }

    // Real-time email validation
    function validateEmail() {
        const email = document.getElementById('email').value;
        if (!emailPattern.test(email)) {       // ! means NOT
            emailError.innerHTML = 'Invalid email format';
        } else {
            emailError.innerHTML = '';
        }
    }
});
