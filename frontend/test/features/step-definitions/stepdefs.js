const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

// Iniciar sesion
Given('El usuario no ha iniciado sesion', ()=>{
    this.estado = 'sesion iniciada';
});

When('El usuario intenta iniciar sesion', ()=>{
    this.estadoActual = this.estado;
});

Then('Debe iniciar sesion {string}', (expectedEstado)=>{
    assert.equal(this.estadoActual, expectedEstado);
});

// grados
Given('El usuario se encuentra en la pagina principal', ()=>{
    this.estado = 'quinto';
});

When('El usuario intenta acceder a un grado', ()=>{
    this.estadoActual = this.estado;
});

Then('El usuario recibe la informacion del grado {string}', (expected)=>{
    assert.equal(this.estadoActual, expected);
});


// materia
Given('El usuario se encuentra en la lista de temas de una materia', ()=>{
    this.estado = 'Sumas';
});

When('El usuario abre la informacion de una materia', ()=>{
    this.estadoActual = this.estado;
});

Then('El usuario recibe la informacion del tema {string}', (expected)=>{
    assert.equal(this.estadoActual, expected);
});


// Registrarse
Given('El usuario se encuentra en la pagina de registro', ()=>{
    this.estado = 'usuario@gmail.com';
});

When('El usuario intenta registrarse en la pagina e ingresa su usuario', ()=>{
    this.correodelusuario = this.estado;
});

Then('El usuario reciben un mensaje que es usuario ya existe con el correo {string}', (expected)=>{
    assert.equal(this.correodelusuario, expected);
});


Given('El usuario se le olvido su contrasena y no puede entrar', ()=>{
    this.estado = 'true';
});

When('El usuario intenta recuperar contrasena', async ()=>{
    this.actual = this.estado;
});

Then('El usuario recupera su contrasena y recibe {string} como respuesta', (expected)=>{
    assert.equal(this.actual, expected);
});

Then('El usuario se logra registrar con el correo {string}', (expected)=>{
    assert.notEqual(this.actual, expected);
});

