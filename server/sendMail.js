const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');


const router = express.Router()
router.post('/', (req,res)=> {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", 
      port: 587,
      auth: {
        type: "login",
        user: process.env.EMAIL, 
        pass: process.env.PASSWD 
      }
    });

    transporter.verify(function(error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

    const {name, email, subject, message } = req.body
    var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `
    const mail = { from: name, to: "strokesgainedstats@gmail.com", subject, text: content }
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
          status: 'success'
        })
      }
    })

})

module.exports = router


  

