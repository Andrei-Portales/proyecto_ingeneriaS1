import RegisterForm from '../../components/RegisterForm/RegisterForm';

import styles from './Register.module.scss';
import loginImage from '../../assets/computer-work.png';

const Register = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.info}>
        <h1>Crea una cuenta para guardar tus logros y avances</h1>
        <img src={loginImage} alt="computer" />
      </div>
      <div className={styles.form}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
