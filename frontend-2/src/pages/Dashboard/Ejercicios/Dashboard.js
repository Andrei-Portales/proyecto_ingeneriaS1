import React from "react";
import { ChakraProvider, DarkMode } from "@chakra-ui/react";
import SidebarComponent from "../../../components/Sidebar/Sidebars";
import ContentComponent from "./Content";
import theme from "../../../theme/theme";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <DarkMode>
        <div className="dashboardWrapper">
          <SidebarComponent isActive={3} />
          <ContentComponent />
        </div>
      </DarkMode>
    </ChakraProvider>
  );
};

export default Dashboard;
