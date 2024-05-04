const express = require('express')
const router = require('./router/router')
const multer = require('multer')
const path = require('path')

const app = express()
app.use(express.json());
app.use('/images',express.static('images'));



function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.normalize('images/'));
    },
    filename: (req, file, cb) => {
      cb(null, getRandomNumber(0,1001) + '-' + file.originalname);
    }
  });
  
  const filter = (req,file,cb)=>{
    if(file.mimetype === "image/png" || file.mimetype === "image/jpg"){
      cb(null,true)
    }else{
      cb(null,false)
    }
  
  }

app.use(multer({storage:fileStorage,fileFilter:filter}).single('image'))

app.use(router)


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
