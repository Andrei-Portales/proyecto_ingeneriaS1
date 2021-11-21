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

  const subtitle = `${styles.subtitle} ${
        !isLightTheme && styles["subtitle-dark"]
    }`;

  const contactoForm = `${styles.contactoForm} ${
        !isLightTheme && styles["contactoForm-dark"]
    }`;

  const content = `${styles.content} ${
        !isLightTheme && styles["content-dark"]
    }`;


    return (
      <body  className={fondo}>
        <div className={styles.contactoPage}>

          <h1 className={title}><b>Contacto</b></h1>
          <br></br><br></br>

          <h7 className={prf}><b>Haz tus consultas a través de nuestros correos.</b></h7>
          <br></br><br></br>

          <div className={styles.wrap}>
            <div className={contactoForm}>
              <h2 className={subtitle}>
                Nombre
              </h2>
              <h2 className={subtitle}>
                Correo
              </h2>
              
              <h5 className={content}>
                Alfredo Quezada
              </h5>
              <h5 className={content}>
                que191002@uvg.edu.gt
              </h5>

              <h5 className={content}>
                Andrei Portales
              </h5>
              <h5 className={content}>
                por19825@uvg.edu.gt
              </h5>

              <h5 className={content}>
                Javier Hernández
              </h5>
              <h5 className={content}>
                her19202@uvg.edu.gt
              </h5>

              <h5 className={content}>
                Marco Ramírez
              </h5>
              <h5 className={content}>
                ram19588@uvg.edu.gt
              </h5>

              <h5 className={content}>
                Mirka Monzón
              </h5>
              <h5 className={content}>
                mon18139@uvg.edu.gt
              </h5>

              <h5 className={content}>
                Oscar de León
              </h5>
              <h5 className={content}>
                del19298@uvg.edu.gt
              </h5>
            </div>
          </div>

        </div>
      </body>
    );
};
    
export default Contacto;
