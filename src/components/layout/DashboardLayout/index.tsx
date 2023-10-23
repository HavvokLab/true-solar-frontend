import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  return (
    <AppShell
      w="100vw"
      h="100vh"
      navbar={<Navbar />}
    >
      <Outlet />
    </AppShell>
  );
};

export default DashboardLayout;
