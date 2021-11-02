import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./profile.scss";
import Avatar from "../../assets/avatar.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../firebase";

import CloseExercise from "../../components/Ejercicios/TopNavigation/CloseExercise";

const Profile = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [showSave, setShowSave] = useState(false);
  const [userGrade, setUserGrade] = useState(localStorage.getItem("userGrade"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  const saveChangesWrapper = `${
    showSave ? "saveChangesWrapper" : "saveChangesWrapperHidden"
  }`;

  function handleEditPicture() {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  }

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

  const handleSelection = (e) => {
    setUserGrade(e.target.value);
    localStorage.setItem("userGrade", e.target.value);
  };

  const userNameChangeHandler = (event) => {
    if (userName !== event.target.value) {
      setUserName(event.target.value);
      setShowSave(true);
      return;
    }
    setShowSave(false);
    return;
  };

  const updateUserInfo = () => {
    setShowSave(false);
  };

  return (
    <div className="profileWrapper">
      <div className="navigationTop">{/* <CloseExercise /> */}</div>
      <div className="userProfileWrapper">
        <div className="userAvatarWrapper">
          <div className="userAvatar">
            <div className="avatar">
              <img src={Avatar} alt="Avatar" />
              <input type="file" id="imageInput" hidden="hidden" />
            </div>

            <FontAwesomeIcon
              icon={faPenAlt}
              onClick={handleEditPicture}
              className="button"
            />
          </div>
          <div className="userBasicInfo">
            <div className="userInfo">
              <label>Nombre</label>
              <br />
              <input
                type="name"
                value={name}
                onChange={userNameChangeHandler}
              />
              <br />
              <br />
              <label>Correo electrónico</label>
              <b />
              <input type="email" value={user?.email} />
              <br />
              <br />
              <label>Grado</label>
              <br />
              <select onChange={handleSelection} value={userGrade}>
                <option>6to Grado</option>
                <option>5to Grado</option>
                <option>4to Grado</option>
              </select>
              <div>
                <p>{localStorage.getItem("message")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={saveChangesWrapper}>
          <button onClick={() => updateUserInfo()}>Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
