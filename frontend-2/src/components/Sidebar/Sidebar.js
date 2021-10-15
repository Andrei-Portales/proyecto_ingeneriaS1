import { useHistory } from "react-router";
import "./sidebar.scss";
import Tooltip from "@material-ui/core/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";

const Sidebar = (props) => {
  const history = useHistory();
  return (
    <div className="sidebarWrapper">
      <div className="sidebar">
        <div className="logoWrapper">
          <p> U V G </p>
        </div>
        <div className="itemsWrapper">
          <ul>
            <Tooltip title="Upload" placement="top" arrow>
              <li
                className={`sidebarItem ${
                  props.isActive === 1 ? "active" : ""
                }`}
                onClick={() => history.push(`/upload`)}
              >
                <FontAwesomeIcon icon={faUpload} className="uilUpload" />
              </li>
            </Tooltip>
            <Tooltip title="Ejercicios" placement="top" arrow>
              <li
                className={`sidebarItem ${
                  props.isActive === 2 ? "active" : ""
                }`}
                onClick={() => history.push(`/dashboard`)}
              >
                <FontAwesomeIcon icon={faChartLine} className="uilDashboard" />
              </li>
            </Tooltip>

            <Tooltip title="Temas" placement="top" arrow>
              <li
                className={`sidebarItem ${
                  props.isActive === 3 ? "active" : ""
                }`}
                onClick={() => history.push(`/dashboard/temas`)}
              >
                <FontAwesomeIcon icon={faListAlt} className="uilDashboard" />
              </li>
            </Tooltip>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
