const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route for Contact Form Submission
// app.post('/contact', async (req, res) => {
//     const { name, email, message } = req.body;

//     try {
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASS,
//             },
//         });

//         const mailOptions = {
//             from: email, // Sender's email
//             to: process.env.EMAIL_USER, // Your email
//             subject: `New message from ${name}`,
//             text: message,
//         };

//         await transporter.sendMail(mailOptions);
//         res.send('Your message has been sent successfully!');
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).send('An error occurred. Please try again later.');
//     }
// });

// Routes
app.use('/', require('./routes/index'));
app.use('/contact', require('./routes/contact'));

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running at ${process.env.BASE_URL} or http://localhost:${PORT}`);
});
