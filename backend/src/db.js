const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: '',  // Poner contrasena de su base de datos
  database: 'proyecto_s1',
  host: 'localhost',
  port: 5432,
});

module.exports = pool;
