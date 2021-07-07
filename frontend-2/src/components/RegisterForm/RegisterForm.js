import { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './RegisterForm.module.scss';


const initialState = {
  email: '',
  name: '',
  password: '',
  cPassword: '',
};

const reducer = (state, action) => {
  const type = action.type;

  if (type === 'EMAIL') {
    return { ...state, email: action.value };
  } else if (type === 'NAME') {
    return { ...state, name: action.value };
  } else if (type === 'PASSWORD') {
    return { ...state, password: action.value };
  } else if (type === 'CPASSWORD') {
    return { ...state, cPassword: action.value };
  }

  return initialState;
};

const RegisterForm = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('submited');
  };

  const hasAccountHandler = () => history.replace('/login');

  const emailChangeHandler = (event) => {
    dispatch({
      type: 'EMAIL',
      value: event.target.value,
    });
  };

  const nameChangeHandler = (event) => {
    dispatch({
      type: 'NAME',
      value: event.target.value,
    });
  };

  const passwordChangeHandler = (event) => {
    dispatch({
      type: 'PASSWORD',
      value: event.target.value,
    });
  };

  const cPasswordChangeHandler = (event) => {
    dispatch({
      type: 'CPASSWORD',
      value: event.target.value,
    });
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h2>Registrarse</h2>
      <input
        className={styles.input}
        placeholder="Correo electronico"
        type="email"
        name="email"
        value={state.email}
        onChange={emailChangeHandler}
      />
      <input
        className={styles.input}
        placeholder="Nombre"
        name="name"
        value={state.ename}
        onChange={nameChangeHandler}
      />
      <input
        className={styles.input}
        placeholder="Contraseña"
        type="password"
        value={state.password}
        onChange={passwordChangeHandler}
      />
      <input
        className={styles.input}
        placeholder="Confirmar Contraseña"
        type="password"
        value={state.cPassword}
        onChange={cPasswordChangeHandler}
      />

      <button className={styles.submit}>Registrarse</button>

      <div>
        <span>¿Ya tienes una cuenta?</span>
        <span className={styles.register} onClick={hasAccountHandler}>
          {' '}
          Iniciar sesion
        </span>
      </div>
    </form>
  );
};

export default RegisterForm;