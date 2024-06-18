const express = require('express');
const app = express();
const sendmail = require("./controllers/sendMail"); // Correct path to your sendMail function
const sendmailv2 = require("./controllers/sendmailv2"); // Correct path to your sendMail function
const port = 3000; // Choose any port you prefer

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Use sendMail function for '/sendmail' route
app.get('/sendmail', sendmailv2);

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
