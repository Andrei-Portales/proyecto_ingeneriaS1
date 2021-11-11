import { ChakraProvider } from "@chakra-ui/react";
import SidebarComponent from "../../../components/Sidebar/Sidebars";
import ContentComponent from "./Content";
import theme from "../../../theme/theme";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <div className="dashboardWrapper">
        <SidebarComponent isActive={3} />
        <ContentComponent />
      </div>
    </ChakraProvider>
  );
};

export default Dashboard;
