import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { themeActions } from '../../store/theme-slice';
import { authActions } from '../../store/auth-slice';

import styles from './Navigation.module.scss';
import logo from '../../assets/logoCompleto.png';

const Navigation = () => {
  const dispatch = useDispatch();
  const themeIsLight = useSelector((state) => state.theme.theme) === 'LIGHT';
  const isAuth = useSelector((state) => state.auth.isLoggedIn);

  const toggleThemeHandler = () => dispatch(themeActions.toggleTheme());
  const logoutHandler = () => dispatch(authActions.logout());

  // Definicion de clases para tema

  const navClases = `${styles.nav} ${!themeIsLight ? styles['nav-dark'] : ''}`;

  return (
    <div className={navClases}>
      <div className={styles['nav-left']}>
        <img alt="logo" src={logo} className={styles.logo} />

        {isAuth && (
          <nav className={styles.actions}>
            <ul>
              <NavLink
                to="/"
                exact
                activeClassName={styles['action-selected']}
                className={styles.action}
              >
                Inicio
              </NavLink>
              <NavLink
                to="/grados"
                activeClassName={styles['action-selected']}
                className={styles.action}
              >
                Grados
              </NavLink>
              <div className={styles.action} onClick={toggleThemeHandler}>
                {themeIsLight ? 'Dark mode' : 'Light mode'}
              </div>
            </ul>
          </nav>
        )}
      </div>
      {isAuth && (
        <div className={styles['nav-right']}>
          <button className={styles.logout} onClick={logoutHandler}>
            Cerrar sesion
          </button>
        </div>
      )}
    </div>
  );
};

export default Navigation;
