// Event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true; // Flag for overall validation

    // Get values from form fields
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Clear previous error messages
    clearErrors();

    // Validate Full Name (must be at least 5 characters)
    if (fullName.length < 5) {
        showError('nameError', 'Name must be at least 5 characters long');
        isValid = false;
    }

    // Validate Email (must contain @)
    if (!email.includes('@')) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate Phone Number (must be 10 digits and not 1234567890)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone) || phone === '1234567890') {
        showError('phoneError', 'Please enter a valid 10-digit phone number');
        isValid = false;
    }

    // Validate Password (must be at least 8 characters and cannot be "password" or user's name)
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        showError('passwordError', 'Password must be at least 8 characters long and cannot be "password" or your name');
        isValid = false;
    }

    // Validate Confirm Password (must match password)
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }

    // If all fields are valid, show a success message
    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('registrationForm').reset(); // Clear the form
    }
});

// Function to show error messages
function showError(id, message) {
    document.getElementById(id).textContent = message;
}

// Function to clear all error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(message) {
        message.textContent = '';
    });
}
