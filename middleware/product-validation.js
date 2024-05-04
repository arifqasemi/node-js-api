const { body, validationResult } = require('express-validator');

module.exports = [
  body('productName')
    .notEmpty().withMessage('product name is required'),
  
  body('productDescription')
    .notEmpty().withMessage('product description is required'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
