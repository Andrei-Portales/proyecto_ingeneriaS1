import React from "react";
import "./success-banner.scss";
import { UilThumbsUp } from "@iconscout/react-unicons";

const SuccessBanner = () => {
  return (
    <div className="successBanner">
      <div className="innerBanner">
        <UilThumbsUp />
        <p>¡Correcto!</p>
      </div>
    </div>
  );
};

export default SuccessBanner;
