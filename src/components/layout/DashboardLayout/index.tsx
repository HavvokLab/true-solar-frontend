import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  return (
    <AppShell
      w="100vw"
      h="100vh"
      navbar={<Navbar />}
      p="md"
    >
      <Outlet />
    </AppShell>
  );
};

export default DashboardLayout;
