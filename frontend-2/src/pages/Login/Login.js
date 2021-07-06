import LoginForm from '../../components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';

import styles from './Login.module.scss';
import loginImage from '../../assets/computer-work.png';

const Login = () => {
  const isLightTheme = useSelector((state) => state.theme.theme) === 'LIGHT';
  const infoClases = `${styles.info} ${
    !isLightTheme ? styles['info-dark'] : ''
  }`;

  return (
    <div className={styles.loginPage}>
      <div className={infoClases}>
        <h1>Iniciar sesión para guardar tus logros y avances</h1>
        <img src={loginImage} alt="computer" />
      </div>
      <div className={styles.form}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
