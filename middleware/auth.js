const jwt = require('jsonwebtoken');
// const { json } = require('sequelize');

module.exports = (req, res, next) => {
    const autheader = req.get('Authorization');
    const secretKey = 'somesecret'

    if(autheader){

        jwt.verify(autheader,secretKey,(err,decoded)=>{
            if(err){
                res.status(404).json({message:'Failed to authenticate token'})
            }
            // console.log(json(decoded))
            req.user = decoded
            next();
        })

    }else{
        return res.status(400).json({message:'Token Not Provided'})
        
    }
    
 
};
