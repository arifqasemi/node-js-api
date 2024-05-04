const { User } = require('../models');
const {Product} = require('../models')
const path = require('path')
class ProductController {
    constructor() {}


    get(req,res){
        Product.findAll().then((result) =>{
            const allproducts = result.map((product)=>{
                return {
                    productId:product.id,
                    productName:product.productName,
                    productDescription:product.productDescription,
                    productImage:req.protocol + '://' + req.get('host') + '/' + product.productImage
                }
            })
         res.json({message:'all the product data',products:allproducts})
        }).catch((errors) =>{
            console.log(errors)
        })
        
    }

    post(req, res) {
        const normalizeFilePath = (filePath) => {
            return filePath.replace(/\\/g, '/'); 
        };
        const imageURL = normalizeFilePath(req.file.path);
        
        Product.create({
            productName:req.body.productName,
            productDescription:req.body.productDescription,
            productImage:imageURL,
            productUserId:req.user.userId
        }).then((result)=>{
            console.log(result)
            res.json({ message: 'the product hasm been added' });

        }).catch((error) =>{
            res.json({message:'Error occured',errors:error})
           console.log(error)
        })
    }
}

module.exports = new ProductController();
