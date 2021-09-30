import { useHistory } from "react-router";
import "./sidebar.scss";
import { UilUpload } from "@iconscout/react-unicons";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";

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
            <li
              className={`sidebarItem ${props.isActive === 1 ? "active" : ""}`}
              onClick={() => history.push(`/upload`)}
            >
              <UilUpload className="uilUpload" />
            </li>
            <li
              className={`sidebarItem ${props.isActive === 2 ? "active" : ""}`}
              onClick={() => history.push(`/dashboard`)}
            >
              <DashboardIcon className="uilDashboard" />
            </li>
            <li
              className={`sidebarItem ${props.isActive === 3 ? "active" : ""}`}
              onClick={() => history.push(`/dashboard/temas`)}
            >
              <AssignmentIcon className="uilDashboard" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
