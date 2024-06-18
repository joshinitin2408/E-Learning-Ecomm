const express = require('express');
const app = express();
const sendMail = require("./controllers/sendMail"); // Correct path to your sendMail function
const port = 3000; // Choose any port you prefer

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Use sendMail function for '/sendmail' route
app.get('/sendmail', sendMail);

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
