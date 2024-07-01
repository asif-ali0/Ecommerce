const mongoose = require('mongoose');
const express = require('express');
const multer = require('multer')
const app = express();
const port = 4000;

mongoose.connect('mongodb+srv://asifali7343:beStp4IM18g7qTI4@cluster0.uslmhsw.mongodb.net/PROJECT0')
// console.log(mongoose)
const storage = multer.diskStorage({
    destination:"./upload/images",
    filename:(req,file,cb) =>{
        return (cb(null,`${file.filename}_$`))
    }
})



app.get('/',(req,res)=>{res.send('your file is running on the page')})
app.listen(port,(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('successfully we cracked it')
    }
})