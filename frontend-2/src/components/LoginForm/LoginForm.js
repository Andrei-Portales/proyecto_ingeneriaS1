import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';

import LoadingSpinnerSized from '../LoadingSpinnerSized/LoadingSpinnerSized';

import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const authDispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    try{
      setIsLoading(true);
      // const response = await fetch('url', {
      //   method: 'POST',
      //   body: JSON.stringify({ email, password }),
      // });
  
      // response.json();

      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsLoading(false);
      authDispatch(authActions.login());
    }catch(e){
      setIsLoading(false);
    }

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

     {!isLoading && <p className={styles.forgotPass}>¿Olvido contraseña?</p>}

      {!isLoading && <button className={styles.submit}>Ingresar</button>}
      {isLoading && <LoadingSpinnerSized height='40px' width='40px' border='3px'/>}

      {!isLoading && <div>
        <span>¿Aún no tienes una cuenta?</span>
        <span className={styles.register} onClick={hasNotAccountHandler}>
          {' '}
          Registrarse
        </span>
      </div>}
    </form>
  );
};

export default LoginForm;
