const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email sending route
app.post('/send-email', async (req, res) => {
    const { name, email, phone, address, message } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'nitinjoshimp95@gmail.com', // replace with your email
            pass: 'mpboard95', // replace with your email password or app password
        },
    });

    // Set up email data
    let mailOptions = {
        from: 'nitinjoshimp95@gmail.com', // sender address
        to: 'nitin.novafy@gmail.com', // list of receivers
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nMessage: ${message}`,
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ', info.response);
        res.status(200).send({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ message: 'Error sending email', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
