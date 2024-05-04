const {User} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
class Login{
    constructor(){}


    post(req,res){
        const password = req.body.password
        User.findOne({where:{email:req.body.email}}).then((result) =>{

            if(result){
                bcrypt.compare(password, result.password).then((passRes) => {
                  if(passRes){
                    const token =  jwt.sign({email:result.email,userId:result.id},'somesecret',{expiresIn:'1h'})
                    res.json({message:'logined successfully!','data':token})
 
                  }else{

                    res.json({message:'invalid credential'})
                  }
                }).catch((error)=>{
                    res.json({message:'invalid credential','error':error})
                })
            }
         
        }).catch((error) =>{
            res.status(404).json({message:'the user was not found',error})

        })

    }
}


module.exports=new Login()