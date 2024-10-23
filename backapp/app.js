const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const path = require('path');

// Initialize the app
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static HTML form file (form.html) on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));  // Serve form.html
});

// Handle form submission with server-side validation
app.post('/submit', (req, res) => {
    const { email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordCapitalLetter = /^(?=.*[A-Z])/;
    const passwordNumber = /^(?=.*[0-9])/;
    const passwordLittleLetter = /^(?=.*[a-z])/;
    const passwordLength = /^(?=.*\d).{8,}$/;

    let errors = {};

    // Email validation
    if (!emailRegex.test(email)) {
        errors.email = 'Must contain a valid email address.';
    }

    // Password validation
    if (!passwordLength.test(password)) {
        errors.password = 'Password must be at least 8 characters long.';
    }
    if (!passwordNumber.test(password)){
        errors.password = 'Password must have number characters.';
    }
    if (!passwordLittleLetter.test(password)) {
        errors.password = 'Password must have lower characters.';
    }
    if (!passwordCapitalLetter.test(password)) {
        errors.password = 'Password must have upper characters.';
    }
    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors);  // Return validation errors as JSON
    }

    res.send('Form submitted successfully');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
