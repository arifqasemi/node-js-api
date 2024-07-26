const express = require('express')
const productController = require('../controllers/productController')
const auth = require('../middleware/auth')
const  Validation  = require('../middleware/validation');
const LoginController = require('../controllers/loginController')
const signUpController = require('../controllers/signUpController')
const productValidation = require('../middleware/product-validation');
const usercontroller = require('../controllers/usercontroller');
const router = express.Router()

router.get('/product',auth,productController.get)
router.post('/product/add',auth,productValidation,productController.post)
router.post('/user/signup',Validation,signUpController.post)
router.post('/user/login',LoginController.post)
router.get('/test',usercontroller.get)


module.exports = router