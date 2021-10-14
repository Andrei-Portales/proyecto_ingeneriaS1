import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinnerSized from "../LoadingSpinnerSized/LoadingSpinnerSized";
import styles from "./RegisterForm.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  const hasAccountHandler = () => history.replace("/login");

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/");
  }, [user, loading, history]);

  return (
    <div>
      <div className={styles.divForm}>
        <ToastContainer />
        <form className={styles.form}>
          {/* <h2>Registrarse</h2> */}
          <input
            className={styles.input}
            placeholder="Correo electronico"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.input}
            placeholder="Nombre"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={styles.input}
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={styles.input}
            placeholder="Confirmar Contraseña"
            type="password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
        </form>

        {!isLoading && (
          <button onClick={register} className={styles.submit}>
            Registrarse
          </button>
        )}
        {isLoading && (
          <LoadingSpinnerSized height="40px" width="40px" border="3px" />
        )}
      </div>
      <div className={styles.socialRegister}>
        <div className={styles.socialLoginTitle}>Registrarse con</div>
        <ul>
          <li>
            <button onClick={signInWithGoogle}>Google</button>
          </li>
        </ul>
      </div>
      {!isLoading && (
        <div className="w-100 text-center mt-2">
          <span>¿Ya tienes una cuenta?</span>
          <span className={styles.register} onClick={hasAccountHandler}>
            {" "}
            Iniciar sesion
          </span>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;
