const { body, validationResult } = require('express-validator');

/**
 * Validates the form for name, email, phone, and message.
 */
const validateContactForm = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('phone').isMobilePhone().withMessage('Invalid phone number'),
    body('message').notEmpty().withMessage('Message is required'),
];

module.exports = { validateContactForm };
