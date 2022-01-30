require('dotenv').config();
const express=require('express');
const path = require('path');
const app=express();

const nodemailer=require('nodemailer');
const hbs=require('nodemailer-express-handlebars');

let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'tusharaggarwal191302004@gmail.com',
        pass:process.env.PASS
    }
});

transporter.use('compile', hbs({
    viewEngine: {
        extName:'.handlebars',
        partialsDir:path.resolve('./views'),
        defaultLayout:false
    },
    viewPath:path.resolve('./views'),
    extName:'.handlebars'
}));


let mailoptions={
    from:'tusharaggarwal191302004@gmail.com',
    to:'tushara272@gmail.com',
    subject:'Testing and Testing',
    text:`<h1>I LOVE You</h1>`,
    template:'index2'
    
}

transporter.sendMail(mailoptions,function(err,data){
    if(err){
        console.log(err.message);
    }
    else{
        console.log('data sent successfully');
    }
})