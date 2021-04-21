const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'proyectoapps12391@gmail.com',
    pass: 'Proyecto123',
  },
});


const sendEmail = (params) => {

  const { email, subject, text, res } = params;

  const mailOptions = {
    from: 'proyectoapps12391@gmail.com',
    to: email,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) =>
    res.send({ result: error === null })
  );
};

module.exports = { sendEmail };
