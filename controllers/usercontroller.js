const {User} = require('../models')
const bcrypt = require('bcrypt')
class UserController{
    constructor(){}


    get(req,res){
        res.send('hello from node.')
    }

    post(req,res){
        User.findOne({where:{email:req.body.email}}).then((result) =>{
            if(result){
                res.status(200).json({message:'the email already exists'})
            }else{
                const password = req.body.password
                bcrypt.hash(password,12).then((hashedPassword) =>{
                User.create({
                    firstName:req.body.firstName,
                    lastName:req.body.lastName,
                    email:req.body.email,
                    password:hashedPassword
                })
                .then((result)=>{
                    res.status(200).json({message:'you have registered successfully!'})
                }).catch((error) =>{
                    res.status(200).json({message:'you have not been registered'})
 
                })
                
                }).catch((error) =>{
                    console.log(error)

                })
                

            }
        }).catch((error) =>{
            res.status(404).json({message:'an error occurred',error})

        })

        // res.status(200).json({message:'some data from the user'})
    }
}


module.exports = new UserController()