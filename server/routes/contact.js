const express = require('express');
const { validationResult } = require('express-validator');
const { validateContactForm } = require('../utils/validators');

const router = express.Router();

/**
 * Validate the contact form and return the errors.
 */
router.post('/api/contact', validateContactForm, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    res.json({ message: 'Form submitted successfully' });
});

module.exports = router;
