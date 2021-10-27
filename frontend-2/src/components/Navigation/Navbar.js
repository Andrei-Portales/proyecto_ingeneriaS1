/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../../store/theme-slice";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../assets/avatar.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../firebase";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useDispatch();
  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";
  const toggleThemeHandler = () => {
    dispatch(themeActions.toggleTheme());
  };

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
        {/* <li className="nav-item">{name}</li> */}

        <Dropdown>
          <Dropdown.Toggle
            className="profile-dropdown-toggle"
            id="dropdown-basic"
          >
            {name}
            <img className="image-profile" src={Avatar} alt="User profile" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="profile-dropdown-menu">
            <Dropdown.Item onClick={() => history.push("/perfil")}>
              {/* <i className="uil uil-user"></i> */}
              <FontAwesomeIcon icon={faUserAlt} className="uil" />
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
                Cerra cesion
              </a>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* <NavItem>
          <DropdownMenu></DropdownMenu>
        </NavItem> */}
      </ul>
    </div>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        <img className="image-profile" src={Avatar} alt="User profile" />
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const dispatch = useDispatch();
  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";
  const toggleThemeHandler = () => {
    dispatch(themeActions.toggleTheme());
  };

  function DropdownItem(props) {
    return (
      <Link to={props.goTo} className="menu-item">
        {props.children}
      </Link>
    );
  }

  function DropdownItemLogout(props) {
    return (
      <a onClick={logout} className="menu-item">
        {props.children}
      </a>
    );
  }

  function DropdownItemTheme(props) {
    return (
      <a onClick={toggleThemeHandler} className="menu-item">
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown">
      <div className="menu">
        <DropdownItem goTo="/perfil">
          <i className="uil uil-user"></i>
          Mi perfil
        </DropdownItem>
        <DropdownItem goTo="/settings">
          <i className="uil uil-setting"></i>
          Ajustes
        </DropdownItem>
        <DropdownItem goTo="/help-center">
          <i className="uil uil-question-circle"></i>
          Ayuda
        </DropdownItem>
        <DropdownItemTheme>
          {isLightTheme ? (
            <i class="uil uil-toggle-off"></i>
          ) : (
            <i className="uil uil-toggle-on"></i>
          )}
          Modo oscuro
        </DropdownItemTheme>
        <div className="horizontal-divider">
          <hr />
        </div>
        <DropdownItemLogout>
          <i className="uil uil-signout"></i>
          Cerra cesion
        </DropdownItemLogout>
      </div>
    </div>
  );
}

export default Navbar;
