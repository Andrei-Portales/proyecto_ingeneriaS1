import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../../store/theme-slice";
import { authActions } from "../../store/auth-slice";

import { UilMoon } from "@iconscout/react-unicons";
import { UilSun } from "@iconscout/react-unicons";

import Drawer from "../Drawer/Drawer";

import styles from "./Navigation.module.scss";
import logo from "../../assets/logoCompleto.png";
import { Fragment } from "react";

const Navigation = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const [showDrawer, setShowDrawer] = useState(false);

    const themeIsLight = useSelector((state) => state.theme.theme) === "LIGHT";
    const isAuth = useSelector((state) => state.auth.isLoggedIn);
    const isAdmin = useSelector((state) => state.auth.isAdmin);

    const toggleThemeHandler = () => dispatch(themeActions.toggleTheme());
    const logoutHandler = () => dispatch(authActions.logout());
    const addHandler = () => history.push("/add");

    const toggleshowDrawer = () => setShowDrawer((prevState) => !prevState);

    // Definicion de clases para tema

    const navClases = `${styles.nav} ${!themeIsLight ? styles["nav-dark"] : ""}`;

    return (
        <Fragment>
            <div className={navClases}>
                <div className={styles["nav-left"]}>
                    <img alt="logo" src={logo} className={styles.logo} />

                    {isAuth && (
                        <nav className={styles.actions}>
                            <ul>
                                {/* <NavLink
                                    to="/"
                                    exact
                                    activeClassName={styles["action-selected"]}
                                    className={styles.action}
                                >
                                    Inicio
                                </NavLink> */}
                                <NavLink
                                    to="/grados"
                                    activeClassName={styles["action-selected"]}
                                    className={styles.action}
                                >
                                    Grados
                                </NavLink>
                                <NavLink
                                    to="/contacto"
                                    activeClassName={styles["action-selected"]}
                                    className={styles.action}
                                >
                                    Contacto
                                </NavLink>
                                <NavLink
                                    to="/preguntas-frecuentes"
                                    activeClassName={styles["action-selected"]}
                                    className={styles.action}
                                >
                                    Preguntas frecuentes
                                </NavLink>
                                <NavLink
                                    to="/about-us"
                                    activeClassName={styles["action-selected"]}
                                    className={styles.action}
                                >
                                    Acerca de Nosotros
                                </NavLink>
                                <div className={styles.action} onClick={toggleThemeHandler}>
                                    {themeIsLight ? <UilMoon size="22" /> : <UilSun size="22" />}
                                </div>
                            </ul>
                        </nav>
                    )}
                </div>

                {isAuth && (
                    <div className={styles["nav-right"]}>
                        {isAdmin && location.pathname !== "/add" && (
                            <button className={styles.add} onClick={addHandler}>
                                Agregar tema
                            </button>
                        )}
                        <button className={styles.logout} onClick={logoutHandler}>
                            Cerrar sesion
                        </button>
                    </div>
                )}

                {isAuth && (
                    <div className={styles.drawerIcon} onClick={toggleshowDrawer}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )}
            </div>
            {showDrawer && isAuth && <Drawer toggleDrawer={toggleshowDrawer} />}
        </Fragment>
    );
};

export default Navigation;