const express = require('express')
const productController = require('../controllers/productController')
const auth = require('../middleware/auth')
const UserController = require('../controllers/usercontroller')
const  Validation  = require('../middleware/validation');
const LoginController = require('../controllers/loginController')
const signUpController = require('../controllers/signUpController')
const productValidation = require('../middleware/product-validation')
const router = express.Router()

router.get('/product',auth,productController.get)
router.post('/product/add',auth,productValidation,productController.post)
router.post('/user/signup',Validation,signUpController.post)
router.post('/user/login',LoginController.post)


module.exports = router