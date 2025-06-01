import nodeMailer from 'nodemailer';
import express from 'express';
import bodyParser from 'body-parser'

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anasramadanking@gmail.com',
      pass: 'ixco cpfq zcwz bizs',
    },
  });


const app = express();
app.use(express.static('portofoilo'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/portofoilo/index.html')
})


app.post('/send',(req,res) => {
    const formData = req.body;
    const mailOptions = {
        from: '"Anas Ramadan" <anasramadanking@gmail.com>',
        to: 'anasramadanking@gmail.com',
        subject: 'Email To Anas Ramadan Website From ' + formData.name,
        html: `<!DOCTYPE html>
        <html>
        <head>
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
            body {
              color: #333;
              direction:ltr;
            }
            * {
              font-family: 'Bebas Neue', sans-serif;
              text-align:left;
            }
            h1 {
              color: #edac66;
              font-size: 24px;
              margin-bottom: 10px;
            }
        
            h3 {
              font-size: 18px;
              margin-top: 20px;
            }
        
            p {
              font-size: 16px;
              line-height: 1.5;
              margin-bottom: 10px;
            }
        
            span {
              font-weight: bold;
            }
        
            a {
              color: #007bff;
              text-decoration: none;
            }
        
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              border: 1px solid #ccc;
              border-radius: 5px;
              background-color: #f9f9f9;
            }
        
            .header {
              text-align: center;
              margin-bottom: 20px;
            }
        
            .details {
              margin-top: 30px;
            }
        
            .location {
              margin-top: 20px;
            }
        
            .contact {
              margin-top: 30px;
            }
        
            .contact p {
              margin: 5px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>From ${formData.name}</h1>
              <p>${formData.phone}</p>
              <p>${formData.email}</p>
              
            </div>
            <div class="message">
              <p>MSG:<br> ${formData.message}</p>
            </div>
          </div>
        </body>
        </html>`,
        }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        });

    res.back();
})

app.listen('3000',() => {
    console.log('3000 PORT');
})
