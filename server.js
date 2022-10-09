const express = require('express');
const app = express();

require('dotenv').config();

require('./startup/middleware')(app);
if(process.env.NODE_ENV === 'production')
    require('./startup/production')(app);

const nodemailer = require('nodemailer');

app.post('/api/add-message', (req, res) => {
    console.log('received');
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: process.env.GOOGLE_EMAIL,
                pass: process.env.GOOGLE_PASSWORD
            }
        });

        //email to me
        transporter.sendMail({
            from: 'Jakub Szuminski <jakubszuminskixrp@gmail.com>',
            to: process.env.GOOGLE_EMAIL,
            subject: 'New message [portfolio]', 
            text: `Here's the new message:\nod: ${req.body.email}\ntopic: ${req.body.topic}\nmessage: ${req.body.message}`,
        });

        //email to the client
        transporter.sendMail({
            from: 'Jakub Szuminski <jakubszuminskixrp@gmail.com>',
            to: req.body.email,
            subject: 'Your message has been sent',
            text: 'Hey!\nI just wanted to let you know that I received your message. I will answer you as quickly as I can.\nHave a good day!\nJakub Szuminski'
        });

        return res.status(200).send('Message successfully sent.');
    }   
    catch(e) {
        console.log(e);
    }

    return res.status(400).send('Could not sent a message. Try again');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));