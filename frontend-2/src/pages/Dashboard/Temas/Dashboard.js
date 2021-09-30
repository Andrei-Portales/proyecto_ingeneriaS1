import SidebarComponent from "../../../components/Sidebar/Sidebar";
import ContentComponent from "./Content";
import "../dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboardWrapper">
      <SidebarComponent isActive={3} />
      <ContentComponent />
    </div>
  );
};

export default Dashboard;
