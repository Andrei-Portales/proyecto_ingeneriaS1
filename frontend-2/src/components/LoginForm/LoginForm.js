import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import PasswordRecovery from "../../pages/Modals/PasswordRecovery";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoadingSpinnerSized from "../LoadingSpinnerSized/LoadingSpinnerSized";

import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/");
  }, [user, loading, history]);

  const logIn = async () => {
    if (email === "" && password === "") {
      toast.error("Correo y contraseña requerido");
      return;
    }
    if (email === "") {
      toast.error("Correo requerido");
      return;
    }
    if (password === "") {
      toast.error("Contraseña requerido");
      return;
    }
    signInWithEmailAndPassword(email, password);
  };

  const emailChangeHandler = (event) => setEmail(event.target.value);
  const passwordChangeHandler = (event) => setPassword(event.target.value);

  const hasNotAccountHandler = () => history.replace("/register");

  return (
    <div>
      <div className={styles.divForm}>
        <ToastContainer />
        {/* <PasswordRecovery /> */}
        <form className={styles.form}>
          {/* <h2>Iniciar sesion</h2> */}
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

          {!isLoading && (
            <p className={styles.forgotPass}>¿Olvido contraseña?</p>
          )}
        </form>

        {!isLoading && (
          <button onClick={() => logIn()} className={styles.submit}>
            Ingresar
          </button>
        )}
        {isLoading && (
          <LoadingSpinnerSized height="40px" width="40px" border="3px" />
        )}
      </div>
      <div className={styles.socialLogin}>
        <div className={styles.socialLoginTitle}>Ingresar con</div>
        <ul>
          <li>
            <button onClick={signInWithGoogle}>Google</button>
          </li>
        </ul>
      </div>
      {!isLoading && (
        <div className="w-100 text-center mt-2">
          <span>¿Aún no tienes una cuenta?</span>
          <span className={styles.register} onClick={hasNotAccountHandler}>
            {" "}
            Registrarse
          </span>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
