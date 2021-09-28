import "./empty.scss";
import EmptyImg from "../../../../assets/earth.svg";

const Empty = () => {
  return (
    <div className="emptyWrapper">
      <div className="emptyImgContainer">
        <img src={EmptyImg} alt="Empty" />
      </div>
    </div>
  );
};

export default Empty;
