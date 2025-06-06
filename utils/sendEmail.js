// packages nodemailer
const nodemailer = require('nodemailer');
// email function
const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({  // email transporter
    from: process.env.EMAIL_USER,
    to,
    subject,
    html
  },(err,data)=>{
                 if (err) {
                console.log('Error Occurs',err);
            } else {
                console.log('Email sent successfully');
            }
  });
};

module.exports = sendEmail;
