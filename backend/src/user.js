const Math = require('mathjs');
const { sendEmail } = require('./mail');

const login = async (req, res, next, pool) => {
  const { email, password } = req.body;
  console.log(req.body);

  if (email === undefined || password === undefined)
    return res.send({ result: false });

  try {
    const result = await pool.query(
      `
        select password 
        from users
        where email = $1
        limit 1
    `,
      [email]
    );

    if (result.rowCount !== 1) return res.send({ result: false });

    const user = result.rows[0];
      console.log(user.password === password);
    if (user.password === password) return res.send({ result: true });
    else return res.send({ result: false });
  } catch (e) {
    return res.send({ result: false });
  }
};

const register = async (req, res, next, pool) => {
  const { email, name, password} = req.body;


  if (email === undefined || name === undefined || password === undefined)
    return res.send({ result: false });

  try {
    await pool.query(
      'insert into users(email, name, password) values ($1, $2, $3)',
      [email, name, password]
    );

    return res.send({ result: true });
  } catch (e) {
    return res.send({ result: false });
  } 
};

const restorePassword = async (req, res, next, pool) => {
  const { email, newPassword } = req.body;

  if (email === undefined || newPassword === undefined)
    return res.send({ result: false });

  try {
    const result = await pool.query(
      'select email from users where email=$1 limit 1',
      [email]
    );

    if (result.rowCount === 0) return res.send({ result: false });

    const user = result.rows[0];

    await pool.query(`update users set password=$1 where email=$2;`, [
      newPassword,
      user.email,
    ]);

    return res.send({ result: true });
  } catch (e) {
    return res.send({ result: false });
  }
};

const codigos = {};
const sendRecoveryEmail = async (req, res, next, pool) => {
  const { email } = req.body;

  if (email === undefined) return res.send({ result: false });

  const result = await pool.query(
    `select email
    from users
    where email = $1
    limit 1`,
    [email]
  );

  if (result.rowCount === 0) return res.send({ result: false });

  let codigo = '';

  for (let i = 0; i < 6; i++) {
    codigo += Math.floor(Math.random() * (9 - 0) + 0);
  }

  codigos[email] = codigo;

  sendEmail({
    email,
    subject: 'Recuperar contraseña',
    text: `Tu codigo de recuperacion es: ${codigos[email]}`,
    res,
  });
};

const confirmRecoveryCode = (req, res, next) => {
  const { code, email } = req.body;

  if (code === undefined || email === undefined)
    return res.send({ result: false });

  return res.send({ result: code === codigos[email] });
};

module.exports = {
  login,
  register,
  restorePassword,
  sendRecoveryEmail,
  confirmRecoveryCode,
};
