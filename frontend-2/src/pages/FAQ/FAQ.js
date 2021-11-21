import styles from "./FAQ.module.scss";
import Accordion from "react-bootstrap/Accordion";
import { useSelector } from "react-redux";

const FAQ = () => {
  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";

  const tituloFAQ = `${styles.faqTitle} ${
    !isLightTheme && styles["faqTitle-dark"]
  }`;

  const fondo = `${styles.bodyPart} ${
        !isLightTheme && styles["bodyPart-dark"]
    }`;

  return (
    <body className={fondo}>
      <div className={styles.faqContainer}>
        <div className={tituloFAQ}>Preguntas frecuentes</div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              ¿Cómo configuro una nueva cuenta de usuario?
            </Accordion.Header>
            <Accordion.Body>
              ¡Cualquiera puede disfrutar del contenido que ofrece Educa Fácil de
              forma gratuita!
              <br />
              <br />
              ¡Tener una cuenta te da la posibilidad de seguir tu propio progreso
              y ganar puntos e insignias!
              <br />
              <br />
              Para eso, acceda a{" "}
              <a href="https://www.educafacil.org/" target="_blank" rel="noreferrer">
                https://www.educafacil.org/
              </a>{" "}
              y haga clic en la opción de registro que mejor se aplique a su
              función principal en Educa Fácil: alumno, maestro o padre.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>¿Cómo informo errores en videos?</Accordion.Header>
            <Accordion.Body>
              Si desea informar una nueva aclaración por un error en un video,
              siga estos pasos:
              <br />
              <br />
              Los comentarios que proporciones irán directamente al equipo de
              contenido y ellos los revisarán para verificar su precisión.
              ¡Gracias por ayudar a mejorar Educa Fácil!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              ¿Cómo puedo restablecer mi contraseña?
            </Accordion.Header>
            <Accordion.Body>
              Si tiene una cuenta de Educa Fácil y olvidó su contraseña, visite
              <a href="https://support.khanacademy.org/hc/en-us/sections/200499614-Managing-Existing-Accounts">
                {" "}
                este enlace.
              </a>{" "}
              <br />
              <br />
              Una vez que ingrese su dirección de correo electrónico y haga clic
              en <b>Restablecer contraseña</b>, se le enviará una URL única a su
              bandeja de entrada. Al acceder a esa URL, se le pedirá que
              establezca una nueva contraseña. Si no recibe el correo electrónico,
              <b>revise su carpeta de correo no deseado</b>.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              ¿Cuáles son los requisitos básicos de contraseña para Educa Fácil?
            </Accordion.Header>
            <Accordion.Body>
              Hay tres requisitos básicos para las contraseñas de cuentas en Educa
              Fácil:
              <br />
              <br />
              Las contraseñas deben tener al menos ocho caracteres.
              <br />
              Las contraseñas no pueden incluir el nombre del usuario
              <br />
              Las contraseñas deben contener símbolos alfanuméricos
              <br />
              <br />
              Evite los caracteres especiales como: $, ", #, @
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              ¿Cuáles son los principios de privacidad de Educa Fácil?
            </Accordion.Header>
            <Accordion.Body>
              Nuestra política de privacidad se basa en nuestro compromiso con los
              siguientes principios de privacidad:
              <br />
              <br />
              1. Estamos profundamente comprometidos con la creación de un entorno
              en línea seguro para usted.
              <br />
              2. No vendemos su información personal a terceros. Nos establecimos
              como una organización sin fines de lucro para que nuestra misión de
              educación y su confianza no entren en conflicto con un motivo de
              lucro.
              <br />
              3. Nos esforzamos por brindarle acceso y control sobre la
              información que nos brinda, y nos tomamos muy en serio la protección
              de su información.
              <br />
              4. Tomamos precauciones adicionales para nuestros estudiantes más
              jóvenes menores de 13 años, incluida la restricción de las cuentas
              de los niños para bloquear automáticamente las funciones que
              permitirían que un niño publique o divulgue información personal.
              <br />
              5. No publicamos anuncios en Educa Fácil. Usamos su información para
              brindarle una mejor experiencia de aprendizaje, no para vender sus
              productos.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              ¿Educa Fácil puede darme un certificado o diploma?
            </Accordion.Header>
            <Accordion.Body>
              Educa Fácil no es una escuela acreditada y el trabajo realizado en
              el sitio no cuenta para un diploma o programa de grado. Educa Fácil
              se utiliza mejor como complemento de su educación normal, ya sea
              educación en el hogar o una escuela tradicional.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </body>
  );
};

export default FAQ;
