const { body, validationResult } = require('express-validator');

module.exports = [
  body('email')
    .isEmail().withMessage('Invalid email address'),
  
  body('password')
    .notEmpty().withMessage('Password is required'),

    body('confirmPassword')
    .notEmpty().withMessage('You must type a confirmation password')
    .custom((value, { req }) => value === req.body.password)
    .withMessage('The passwords do not match'),


  (req, res, next) => {
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
