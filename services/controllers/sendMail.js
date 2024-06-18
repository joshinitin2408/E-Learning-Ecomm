// ./controllers/sendMail.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'candido50@ethereal.email',
        pass: 'B5cwujta342pfADw22'
    }
});

async function sendMail(req, res) {
    try {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Maddison Foo Koch " <maddison53@ethereal.email>', // sender address
            to: "nitinjoshimp95@gmail.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
        console.log("Message sent: %s", info.messageId);
        res.send("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Failed to send email");
    }
}

module.exports = sendMail;
