import { ChakraProvider } from "@chakra-ui/react";
import SidebarComponent from "../../../components/Sidebar/Sidebars";
import ContentComponent from "./Content";
import theme from "../../../theme/theme";
import "../Ejercicios/dashboard.scss";

const Dashboard = () => {
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <div className="dashboardWrapper">
        <SidebarComponent isActive={4} />
        <ContentComponent />
      </div>
    </ChakraProvider>
  );
};

export default Dashboard;
