import React from "react";
import "./profile-avatar.scss";
import { useHistory } from "react-router";

import Avatar from "../../../assets/avatar.png";
import { UisStar } from "@iconscout/react-unicons-solid";

const ProfileAvatar = (props) => {
  const history = useHistory();

  const goToProfile = () => {
    // SEND ID OF CURRENT EXERCISE
    history.push(`/profile`);
  };

  return (
    <div className="pointsPanel" onClick={() => goToProfile()}>
      <div className="myPointsPanel">
        <UisStar className="uisStar" />
        <p>150</p>
      </div>
      <div className="avatarPanel">
        <img src={Avatar} alt="Avatar" />
      </div>
    </div>
  );
};

export default ProfileAvatar;
