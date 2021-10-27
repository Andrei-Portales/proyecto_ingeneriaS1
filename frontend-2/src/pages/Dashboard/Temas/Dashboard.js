import SidebarComponent from "../../../components/Sidebar/Sidebars";
import ContentComponent from "./Content";
import "../dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboardWrapper">
      <SidebarComponent isActive={4} />
      <ContentComponent />
    </div>
  );
};

export default Dashboard;
