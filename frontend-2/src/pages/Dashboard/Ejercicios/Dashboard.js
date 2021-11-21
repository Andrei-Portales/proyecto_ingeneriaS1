import React from "react";
import { ChakraProvider, DarkMode } from "@chakra-ui/react";
import SidebarComponent from "../../../components/Sidebar/Sidebars";
import ContentComponent from "./Content";
import theme from "../../../theme/theme";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <ChakraProvider theme={theme}>
      <DarkMode>
        <div className="dashboardWrapper">
          <SidebarComponent isActive={4} />
          <ContentComponent />
        </div>
      </DarkMode>
    </ChakraProvider>
  );
};

export default Dashboard;
