// imports paquetes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// import rutas
const {
  login,
  register,
  restorePassword,
  sendRecoveryEmail,
  confirmRecoveryCode,
} = require('./user');

const {insertTema, getTemas} = require('./grado');

const pool = require('./db');

const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Login requests
app.post('/login', (req, res, next) => login(req, res, next, pool)); // email, password
app.post('/register', (req, res, next) => register(req, res, next, pool)); //  email, name, password

app.post('/restore_password', (req, res, next) => restorePassword(req, res, next, pool)); // email, newPassword
app.post('/send_recovery_email', (req, res, next) => sendRecoveryEmail(req, res, next, pool)); // email
app.post('/confirm_recovery_code', (req, res, next) => confirmRecoveryCode(req, res, next)); //code, email

app.post('/insert-tema', (req, res, next)=>insertTema(req, res, next, pool)); // id_grado, title, body, video_url
app.post('/get-temas', (req, res, next)=> getTemas(req, res, next, pool)); // id_grado


app.listen(port, () => {
  console.log(`Server running at: ${port}`);
});
