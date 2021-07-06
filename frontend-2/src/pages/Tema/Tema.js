import { useParams } from 'react-router-dom';
import styles from './Tema.module.scss';

const Tema = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className={styles.tema}>
      <div className={styles.main}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/a7aUQQCfuP0"
          title="YouTube video player"
          allow="clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles.temaContent}>
          <h1>Numeracion de 6 cifras</h1>
          <p className={styles.description}>
            Los números nos sirven para contar seres, objetos . . ., cualquier
            cantidad de todo lo que nos rodea. Para poder escribir cualquier
            número, hemos de usar caracteres o símbolos, que hemos de combinar
            según unas reglas que forman lo que llamamos un sistema de
            numeración. A lo largo de la historia ha habido distintos sistemas
            de numeración, como el maya, el chino o el sistema romano, con
            símbolos y reglas diferentes a los nuestros. Nuestro sistema de
            numeración decimal procede de la India, aunque fueron los árabes los
            que lo introdujeron en Europa. Se llama sistema decimal porque 10
            unidades de un orden cualquiera forman 1 unidad del orden inmediato
            superior. Es así que: 10 UM = 1DM 10 DM = 1CM 1 CM en cifras: 100
            000 1 CM en palabras: cien mil Ejemplo: 3 CM = 300 000 8 CM = 800
            000 UBICACIÓN EN EL TABLERO POSICIONAL Para ubicar los números en el
            tablero posicional comenzamos de derecha a izquierda comenzando por
            las unidades (U), decenas (D), centenas (C), unidades de millar
            (UM), decenas de millas (DM) y centenas de millar (CM). LECTURA Y
            ESCRITURA DE NÚMEROS HASTA LA CENTENA DE MILLAR Para leer
            cantidades, primero se leen los millares: centenas de millar (CM),
            decenas de millar (DM) y unidades de millar (UM); y después se leen
            las centenas (C), decenas (D) y unidades (U). Ejemplo: Número 863
            574 Lectura del número ochocientos sesenta y tres mil quinientos
            setenta y cuatro Para poder leer los números hasta la centena de
            millar es importante que formes grupos de tres cifras; es decir,
            (teniendo en cuenta el ejemplo) 863 el espacio que encontramos se le
            puede reemplazar con la palabra mil y luego, las últimas tres cifras
            574. Para escribir los números hasta la centena de millar se puede
            seguir la misma recomendación. Comienza de izquierda a derecha con
            el número que está antes de la palabra mil, (863) el espacio que se
            deja es por la palabra mil y luego escribe el número que sigue
            (574). DESCOMPOSICIÓN DE UN NÚMERO Los números se pueden
            descomponer: • Descomposición según su valor posicional: 462 921 =
            4CM + 6DM + 2UM + 9C + 2D + 1U 936 705 = 9CM + 3DM + 6UM + 7C + 5U •
            Descomposición en unidades: 725 634 = 700 000 + 20 000 + 5 000 + 600
            + 30 + 4 876 341 = 800 000 + 70 000 + 6 000 + 300 + 40 + 1
          </p>
        </div>
      </div>
      <div className={styles.more}></div>
    </div>
  );
};

export default Tema;
