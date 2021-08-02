import styles from './AboutUs.module.scss';
import { useSelector } from 'react-redux';

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
        <div className={styles.aboutContainer}>
            <div className={tituloAbout}>Acerca de Nosotros</div>
            <h3 className={textAbout1}>Mision</h3>
            <h5 className={textAbout2}>Nuestra Msision es alcanzar Nuestra Msision es alcanzar Nuestra Msision es alcanzar 
            Nuestra Msision es alcanzar Nuestra Msision es alcanzar Nuestra Msision es alcanzar 
            Nuestra Msision es alcanzar Nuestra Msision es alcanzar Nuestra Msision es alcanzar </h5>

            <h3 className={textAbout1}>Vision</h3>
            <h5 className={textAbout2}>Nuestra Vision es alcanzar Nuestra Vision es alcanzar Nuestra Vision es alcanzar 
            Nuestra Vision es alcanzar Nuestra Vision es alcanzar Nuestra Vision es alcanzar 
            Nuestra Vision es alcanzar Nuestra Vision es alcanzar Nuestra Vision es alcanzar </h5>

        </div>);
};

export default AboutUs;