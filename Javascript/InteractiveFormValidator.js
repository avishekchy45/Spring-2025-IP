// Get form elements
const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const age = document.getElementById('age');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const terms = document.getElementById('terms');
const successMessage = document.getElementById('successMessage');

// Error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const ageError = document.getElementById('ageError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const termsError = document.getElementById('termsError');

// Validation functions
function validateName() {
    const nameValue = fullName.value.trim();
    const hasNumber = /\d/;

    if (nameValue === '') {
        showError(fullName, nameError, 'Full name is required');
        return false;
    } else if (hasNumber.test(nameValue)) {
        showError(fullName, nameError, 'Name must not contain any number');
        return false;
    } else if (nameValue.length < 2) {
        showError(fullName, nameError, 'Full name must be at least 2 characters');
        return false;
    } else {
        showSuccess(fullName, nameError);
        return true;
    }
}

function validateEmail() {
    const emailValue = email.value.trim();
    const emailRegex = /^[\s@]^+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
        showError(email, emailError, 'Email is required');
        return false;
    } else if (!emailRegex.test(emailValue)) {
        showError(email, emailError, 'Please enter a valid email address');
        return false;
    } else {
        showSuccess(email, emailError);
        return true;
    }
}

function validatePhone() {
    const phoneValue = phone.value.trim();
    const phoneRegex = /^\d{11}$/;
    // const phoneRegex = /^\+?(\d{1,3})?[-.\s]?(\d{1,4})?[-.\s]?(\d{1,4})?[-.\s]?(\d{1,9})$/; // +1-555-123-4567 or 555.123.4567 or 1234567890 \\ International format
    // const phoneRegex = /^(?:(?:\+|0{0,3})880(\s*[\-]\s*)?|[0])?[1]\d{9}$/; // +8801234567890 or 08801234567890 or 01234567890 // Bangladesh format
    // const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/; // (123) 456-7890 or 123-456-7890 or 123.456.7890 or 1234567890 or +31636363634 or 075-63546725 // US format
    // const phoneRegex = /^$\d{3}$ \d{3}-\d{4}$/; // (123) 456-7890 // US format

    if (phoneValue === '') {
        showError(phone, phoneError, 'Phone number is required');
        return false;
    } else if (!phoneRegex.test(phoneValue)) {
        showError(phone, phoneError, 'Phone number must have exactly 11 digits');
        return false;
    } else {
        showSuccess(phone, phoneError);
        return true;
    }
}

function validateAge() {
    const ageValue = parseInt(age.value);

    if (age.value === '') {
        showError(age, ageError, 'Age is required');
        return false;
    } else if (ageValue < 13 || ageValue > 120) {
        showError(age, ageError, 'Age must be between 13 and 120');
        return false;
    } else {
        showSuccess(age, ageError);
        return true;
    }
}

function validatePassword() {
    const passwordValue = password.value;
    const hasNumber = /\d/;

    if (passwordValue === '') {
        showError(password, passwordError, 'Password is required');
        return false;
    } else if (passwordValue.length < 8) {
        showError(password, passwordError, 'Password must be at least 8 characters');
        return false;
    } else if (!hasNumber.test(passwordValue)) {
        showError(password, passwordError, 'Password must contain at least one number');
        return false;
    } else {
        showSuccess(password, passwordError);
        return true;
    }
}

function validateConfirmPassword() {
    const confirmPasswordValue = confirmPassword.value;
    const passwordValue = password.value;

    if (confirmPasswordValue === '') {
        showError(confirmPassword, confirmPasswordError, 'Please confirm your password');
        return false;
    } else if (confirmPasswordValue !== passwordValue) {
        showError(confirmPassword, confirmPasswordError, 'Passwords do not match');
        return false;
    } else {
        showSuccess(confirmPassword, confirmPasswordError);
        return true;
    }
}

function validateTerms() {
    if (!terms.checked) {
        termsError.textContent = 'You must agree to the terms and conditions';
        return false;
    } else {
        termsError.textContent = '';
        return true;
    }
}

// Helper functions for showing errors and success
function showError(input, errorElement, message) {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    errorElement.textContent = message;
}

function showSuccess(input, errorElement) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    errorElement.textContent = '';
}

// Real-time validation
fullName.addEventListener('blur', validateName);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);
age.addEventListener('blur', validateAge);
password.addEventListener('blur', validatePassword);
confirmPassword.addEventListener('blur', validateConfirmPassword);
terms.addEventListener('change', validateTerms);

// Phone number formatting
// phone.addEventListener('input', function(e) {
//     let value = e.target.value.replace(/\D/g, '');
//     let formattedValue = '';

//     if (value.length >= 6) {
//         formattedValue = `(${value.substr(0,3)}) ${value.substr(3,3)}-${value.substr(6,4)}`;
//     } else if (value.length >= 3) {
//         formattedValue = `(${value.substr(0,3)}) ${value.substr(3)}`;
//     } else {
//         formattedValue = value;
//     }

//     e.target.value = formattedValue;
// });

// Form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from actually submitting

    // Run all validations
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isAgeValid = validateAge();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isTermsValid = validateTerms();

    // Check if all validations pass
    if (isNameValid && isEmailValid && isPhoneValid && isAgeValid &&
        isPasswordValid && isConfirmPasswordValid && isTermsValid) {

        // Show success message
        successMessage.classList.remove('d-none');
        form.reset(); // Clear the form

        // Remove all validation classes
        const inputs = form.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.classList.remove('is-valid', 'is-invalid');
        });

        // Clear error messages
        const errors = form.querySelectorAll('.error-message');
        errors.forEach(error => error.textContent = '');

    } else {
        // Hide success message if it was showing
        successMessage.classList.add('d-none');
    }
});