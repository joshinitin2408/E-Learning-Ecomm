// ./controllers/sendMail.js
const nodemailer = require("nodemailer");
require('dotenv').config(); // Load environment variables from .env file
const path = require('path');
///for this we have to enable 2 step varification and then google Sign in with app passwords
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD
    }
});

async function sendMailv2(req, res) {
    try {
        const info = await transporter.sendMail({
            from: {
                name: "testsender",
                address: process.env.USER
            },
            to: "joshinitin2408@gmail.com, baz@example.com",
            subject: "Sending via gmail",
            text: "Hello world?",
            html: "<b>Hello world?</b>",
            // attachments: [
            //     {
            //         filename: 'test.txt',
            //         path: path.join(__dirname, 'test.txt'),
            //         contentType: 'text/plain'
            //     },
            //     {
            //         filename: 'sample.jpg',
            //         path: path.join(__dirname, 'sample.jpg'),
            //         contentType: 'image/jpg'
            //     }
            // ]
            // above commented line throw error 
        });
        console.log("Message sent: %s", info.messageId);
        res.send("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Failed to send email: " + error.message);
    }
}

module.exports = sendMailv2;
