// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const email = document.getElementById('email').value;
    const indexnum = document.getElementById('indexnum').value;
    const password = document.getElementById('password').value;

    // Perform validation
    if (email === '') {
        alert('Please enter your email');
        return;
    }

    if (!indexnum.match(/^2022\/(IS|CS)\/\d{3}$/)) {
        alert('Please enter a valid index number in the format 2022/IS/123');
        return;
    }

    if (password === '') {
        alert('Please enter your password');
        return;
    }
    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
    }
    if (!/[a-z]/.test(password)) {
        alert('Password must contain at least one lowercase letter');
        return;
    }
    if (!/[A-Z]/.test(password)) {
        alert('Password must contain at least one uppercase letter');
        return;
    }
    if (!/[0-9]/.test(password)) {
        alert('Password must contain at least one number');
        return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
        alert('Password must contain at least one symbol');
        return;
    }

    // If all fields are valid, submit the form
    form.submit();
});