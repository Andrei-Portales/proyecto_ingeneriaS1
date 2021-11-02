import React from "react";
import "./success-banner.scss";

const SuccessBanner = () => {
  return (
    <div className="successBanner">
      <div className="innerBanner">
        <i className="uil uil-thumbs-up"></i>
        <p>¡Correcto!</p>
      </div>
    </div>
  );
};

export default SuccessBanner;
