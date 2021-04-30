// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'proyectoapps12391@gmail.com',
//     pass: 'Proyecto123',
//   },
// });

// const sendEmail = (params) => {
//   const { email, subject, text, res } = params;

//   const mailOptions = {
//     from: 'proyectoapps12391@gmail.com',
//     to: email,
//     subject: subject,
//     text: text,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     console.log(error);
//     res.send({ result: error === null });
//   });
// };

const nodeoutlook = require('nodejs-nodemailer-outlook');


const sendEmail = (params) => {
  const { email, subject, text, res } = params;

  nodeoutlook.sendEmail({
    auth: {
        user: "proyecto_s1_ingeneria@outlook.com",
        pass: "Proyecto123"
    },
    from: 'proyecto_s1_ingeneria@outlook.com',
    to: email,
    subject: subject,
    text: text,
    onError: (e) => {
      console.log(e);
      res.send({result: false});
    },
    onSuccess: (i) => {
      res.send({result: true});
    },
}
 
 
);

  
};



module.exports = { sendEmail };
