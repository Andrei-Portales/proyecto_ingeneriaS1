import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { themeActions } from '../../store/theme-slice';
import { authActions } from '../../store/auth-slice';
import styles from './Drawer.module.scss';

const Drawer = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const themeIsLight = useSelector((state) => state.theme.theme) === "LIGHT";

  const navClases = `${styles.drawer} ${!themeIsLight ? styles["drawer-dark"] : ""}`;

  const toggleThemeHandler = () => {
    dispatch(themeActions.toggleTheme());
    props.toggleDrawer();
  };
  const logoutHandler = () => {
    dispatch(authActions.logout());
    props.toggleDrawer();
  };

  const onclick = (route) => {
    history.push(route);
    props.toggleDrawer();
  };

  const content = (
    <Fragment>
      <div className={styles.background} onClick={props.toggleDrawer}></div>
      <div className={navClases}>
        <header>
          <div className={styles.drawerIcon} onClick={props.toggleDrawer}>
            <div></div>
            <div></div>
          </div>
        </header>

        <hr />

        <main>
          <ul>
            <li onClick={onclick.bind(null, '/')} className={styles.action}>
              Inicio
            </li>
            <li
              onClick={onclick.bind(null, '/grados')}
              className={styles.action}
            >
              Grados
            </li>
            <li
              onClick={onclick.bind(null, '/contacto')}
              className={styles.action}
            >
              Contacto
            </li>
            <li
              onClick={onclick.bind(null, '/preguntas-frecuentes')}
              className={styles.action}
            >
              Preguntas frecuentes
            </li>
            <li onClick={toggleThemeHandler} className={styles.action}>
              Dark mode
            </li>
          </ul>

          <br />
          <br />

          <button
            className={styles.button}
            onClick={onclick.bind(null, '/add')}
          >
            Agregar tema
          </button>
          <button className={styles.button} onClick={logoutHandler}>
            Cerrar sesion
          </button>
        </main>
      </div>
    </Fragment>
  );

  return ReactDOM.createPortal(content, document.getElementById('portals'));
};

export default Drawer;
