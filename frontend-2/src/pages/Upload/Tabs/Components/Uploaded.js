import "./uploaded.scss";
import Success from "../../../../assets/completed.png";

const Uploaded = () => {
  return (
    <div className="uploaderWrapper">
      <div className="uploadedImgContainer">
        <img src={Success} alt="Empty" />
      </div>
    </div>
  );
};

export default Uploaded;
