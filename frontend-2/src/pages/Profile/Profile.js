import React, { useState, useEffect } from "react";
import "./profile.scss";
import Avatar from "../../assets/avatar.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons";

import CloseExercise from "../../components/Ejercicios/TopNavigation/CloseExercise";

const Profile = () => {
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

  // const generateUserId = (e) => {
  //   e.preventDefault();
  //   const newNote = {
  //     id: Math.random().toString(36).substr(2, 9),
  //     text: e.target.note.value,
  //   };
  //   setNotes([...notes, newNote]);
  //   e.target.note.value = "";
  // };

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
      <div className="navigationTop">
        <CloseExercise />
      </div>
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
                value={userName}
                onChange={userNameChangeHandler}
              />
              <br />
              <br />
              <label>Correo electrónico</label>
              <b />
              <input type="email" value="" />
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
