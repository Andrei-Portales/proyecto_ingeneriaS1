import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';

import styles from './LoginForm.module.scss';

const LoginForm = (props) => {
  const authDispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('submited');
    authDispatch(authActions.login());
  };

  const emailChangeHandler = (event) => setEmail(event.target.value);
  const passwordChangeHandler = (event) => setPassword(event.target.value);

  const hasNotAccountHandler = () => history.replace('/register');

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h2>Iniciar sesion</h2>
      <input
        className={styles.input}
        placeholder="Correo"
        type="email"
        name="email"
        value={email}
        onChange={emailChangeHandler}
      />
      <input
        className={styles.input}
        placeholder="Contraseña"
        type="password"
        value={password}
        onChange={passwordChangeHandler}
      />

      <p className={styles.forgotPass}>¿Olvido contraseña?</p>

      <button className={styles.submit}>Ingresar</button>

      <div>
        <span>¿Aún no tienes una cuenta?</span>
        <span className={styles.register} onClick={hasNotAccountHandler}>
          {' '}
          Registrarse
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
