// imports paquetes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// import rutas
const {
  login,
  register,
  restorePassword,
  sendRecoveryEmail,
  confirmRecoveryCode,
} = require('./user');

const { addTema, getTemas, getTema } = require('./grado');
const pool = require('./db');
const port = 2000;
const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));


// Login requests
app.post('/login', (req, res, next) => login(req, res, next, pool)); // email, password
app.post('/register', (req, res, next) => register(req, res, next, pool)); //  email, name, password

app.post('/restore_password', (req, res, next) => restorePassword(req, res, next, pool)); // email, newPassword
app.post('/send_recovery_email', (req, res, next) => sendRecoveryEmail(req, res, next, pool)); // email
app.post('/confirm_recovery_code', (req, res, next) => confirmRecoveryCode(req, res, next)); //code, email


app.post('/addTema', (req, res) => addTema(req, res, pool));
app.post('/temas', (req, res) => getTemas(req, res, pool));
app.post('/tema', (req, res) => getTema(req, res, pool));


app.get('*', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.listen(port, () => {
  console.log(`Server running at: ${port}`);
});
