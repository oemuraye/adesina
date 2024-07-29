// server.js
import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import cors from 'cors';

const app = express();

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Content-Type,Authorization,x-api-key',
}));
dotenv.config();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Adesina Server is running');
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail', // or any other email service
    auth: {
      user: process.env.auth_email,
      pass: process.env.gmail_password,
    },
  });

  const mailOptions = {
    from: email,
    // to: 'rutech360@gmail.com',
    to: 'info@adesina.ng',
    subject: 'Contact Request from Adensina Website',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error sending email'});
    }
    res.status(200).json({ message: 'Email sent successfully'});
  });
});

app.post('/api/invest', (req, res) => {
  const { name, email, phone, capital } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // or any other email service
    auth: {
      user: process.env.auth_email,
      pass: process.env.gmail_password,
    },
  });

  const mailOptions = {
    from: email,
    to: 'info@adesina.ng',
    subject: 'Investment Request from Adensina Website',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Capital: ${capital}   
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error sending email'});
    }
    res.status(200).json({ message: 'Email sent successfully'});
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
