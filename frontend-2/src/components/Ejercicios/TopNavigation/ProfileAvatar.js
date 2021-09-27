import React, { useState } from "react";
import "./profile-avatar.scss";
import { useHistory } from "react-router";
import { UisStar } from "@iconscout/react-unicons-solid";

const ProfileAvatar = () => {
  const history = useHistory();
  const [points, setPoints] = useState(localStorage.getItem("userPoints"));

  const goToProfile = () => {
    // SEND ID OF CURRENT EXERCISE
    history.push(`/profile`);
  };

  return (
    <div className="pointsPanel" onClick={() => goToProfile()}>
      <div className="myPointsPanel">
        <UisStar className="uilStar" size="22" />
        <p>{points}</p>
      </div>
    </div>
  );
};

export default ProfileAvatar;
