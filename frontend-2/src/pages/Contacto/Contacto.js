import styles from './Contacto.module.scss';
import { useSelector } from "react-redux";

const Contacto = () => {
  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";

  const title = `${styles.title} ${
    !isLightTheme && styles["title-dark"]
  }`;

  const prf = `${styles.prf} ${
    !isLightTheme && styles["prf-dark"]
  }`;

  const fondo = `${styles.bodyPart} ${
        !isLightTheme && styles["bodyPart-dark"]
    }`;

    return (
      <body  className={fondo}>
        <div className={styles.contactoPage}>

          <h1 className={title}><b>Contacto</b></h1>
          <br></br><br></br>

          <h7 className={prf}><b>Haz tus consultas a través de nuestros correos.</b></h7>
          <br></br><br></br>

          <div className={styles.wrap}>
            <div className={styles.contactoForm}>
              <h2 className={styles.subtitle}>
                Nombre
              </h2>
              <h2 className={styles.subtitle}>
                Correo
              </h2>
              
              <h5 className={styles.content}>
                Alfredo Quezada
              </h5>
              <h5 className={styles.content}>
                que191002@uvg.edu.gt
              </h5>

              <h5 className={styles.content}>
                Andrei Portales
              </h5>
              <h5 className={styles.content}>
                por19825@uvg.edu.gt
              </h5>

              <h5 className={styles.content}>
                Javier Hernández
              </h5>
              <h5 className={styles.content}>
                her19202@uvg.edu.gt
              </h5>

              <h5 className={styles.content}>
                Marco Ramírez
              </h5>
              <h5 className={styles.content}>
                ram19588@uvg.edu.gt
              </h5>

              <h5 className={styles.content}>
                Mirka Monzón
              </h5>
              <h5 className={styles.content}>
                mon18139@uvg.edu.gt
              </h5>

              <h5 className={styles.content}>
                Oscar de León
              </h5>
              <h5 className={styles.content}>
                del19298@uvg.edu.gt
              </h5>
            </div>
          </div>

        </div>
      </body>
    );
};
    
export default Contacto;
