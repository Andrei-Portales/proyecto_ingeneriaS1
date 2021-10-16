/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../assets/avatar.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../firebase";

function Navbar(props) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);

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
        <li className="nav-item">{name}</li>

        <NavItem>
          <DropdownMenu></DropdownMenu>
        </NavItem>
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
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Fail to logout");
    }
  }

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
        {/* <DropdownItem goTo="/pro">
          <i className="uil uil-shield-exclamation"></i>
          Ir premium
        </DropdownItem> */}
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
