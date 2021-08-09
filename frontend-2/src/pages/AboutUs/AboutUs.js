import styles from './AboutUs.module.scss';
import { useSelector } from 'react-redux';
import fondo from '../../assets/background.jpg';

const AboutUs = () => {
    const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";

    const tituloAbout = `${styles.aboutTitle} ${
        !isLightTheme && styles["aboutTitle-dark"]
    }`;

    const textAbout1 = `${styles.aboutText1} ${
        !isLightTheme && styles["aboutText1-dark"]
    }`;

    const textAbout2 = `${styles.aboutText2} ${
        !isLightTheme && styles["aboutText2-dark"]
    }`;

    return(
        <body background={fondo}>
            <div className={styles.aboutContainer}>
                <div className={tituloAbout}>Acerca de Nosotros</div>
                <h3 className={textAbout1}>Misión</h3>
                <h5 className={textAbout2}>Contribuir a la educación y la 
                productividad de las personas, poniendo a su disposición 
                una plataforma que brinda contenido educativo de calidad 
                para el fortalecimiento de los conocimientos adquiridos en 
                cursos impartidos en las instituciones educativas, 
                complementando el proceso de aprender una manera eficiente. 
                </h5>

                <h3 className={textAbout1}>Visión</h3>
                <h5 className={textAbout2}>Ser la plataforma líder en 
                educación y productividad estudiantil, a través de 
                herramientas innovadoras, eficientes y accesibles que 
                contribuyan al proceso educativo de las personas a nivel global. </h5>

            </div>
        </body>);
};

export default AboutUs;