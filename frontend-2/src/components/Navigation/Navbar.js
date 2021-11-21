/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../../store/theme-slice";
import { useHistory } from "react-router-dom";
import Avatar from "../../assets/avatar.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../firebase";
import Dropdown from "react-bootstrap/Dropdown";

function Navbar(props) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch();
  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";
  const toggleThemeHandler = () => {
    dispatch(themeActions.toggleTheme());
  };

  // const usernameText = isLightTheme ? "usernameTex" : "usernameTexDark";
  const usernameText = `${"usernameText"} ${
    !isLightTheme ? "usernameTextDark" : ""
  }`;

  const fetchUserName = async () => {
    console.log("feching");
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      console.log("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/login");
    fetchUserName();
  }, [user, loading]);

  return (
    <div className="main-navbar">
      <ul className="ul-navbar-nav">
        <Dropdown>
          <Dropdown.Toggle
            className="prfroofile-dropdown-toggle"
            id="dropdown-basic"
          >
            <span className={usernameText}>{name}</span>
            <img className="image-profile" src={Avatar} alt="User profile" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="profile-dropdown-menu">
            <Dropdown.Item onClick={() => history.push("/perfil")}>
              <i className="uil uil-user"></i>
              Mi perfil
            </Dropdown.Item>
            <Dropdown.Item onClick={toggleThemeHandler} className="menu-item">
              {isLightTheme ? (
                <i className="uil uil-toggle-off"></i>
              ) : (
                <i className="uil uil-toggle-on"></i>
              )}
              Modo oscuro
            </Dropdown.Item>
            <div className="horizontal-divider">
              <hr />
            </div>
            <Dropdown.Item>
              <a onClick={logout} className="menu-item">
                {props.children}
                <i className="uil uil-signout"></i>
                Cerrar sesión
              </a>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ul>
    </div>
  );
}

export default Navbar;
