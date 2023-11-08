import { Fragment } from "react";
import {
  Box,
  Drawer,
  Hidden,
  List,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import {
  LocationOn,
  Web,
  Settings,
  History,
  LocationCity,
  Dashboard,
} from "@material-ui/icons";
import NavItem from "./NavItem";
import { drawerWidth } from "../constants";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: `${drawerWidth}px`,
    background: theme.palette.white,
  },
}));

const items = [
  {
    href: "/dashboard",
    icon: <Dashboard />,
    title: "Dashboard",
    children: [
      {
        href: "/dashboard/summary",
        icon: <Dashboard />,
        title: "Summary",
      },
      {
        href: "/dashboard/alarm",
        icon: <Dashboard />,
        title: "Performance & Alarm",
      },
      {
        href: "/dashboard/report",
        icon: <Dashboard />,
        title: "Report",
      },
      {
        href: "/dashboard/monthlyProduction",
        icon: <Dashboard />,
        title: "Monthly Production",
      },
      {
        href: "/dashboard/dailyProduction",
        icon: <Dashboard />,
        title: "Daily Production",
      },
    ],
  },
  {
    href: "/config/performanceAlarm",
    icon: <Settings />,
    title: "Performance Alarm Configuration",
  },
  {
    href: "/config/province",
    icon: <LocationCity />,
    title: "Province Configuration",
  },
  {
    href: "/config/area",
    icon: <LocationOn />,
    title: "Area Configuration",
  },
  {
    href: "/config/web",
    icon: <Web />,
    title: "Inverter Web Portal",
  },
  {
    href: "/log",
    icon: <History />,
    title: "Activity Log",
  },
];

const Sidebar = ({
  openSidebar,
  onCloseSidebar,
  selectedMenu,
  setSelectedMenu,
}) => {
  const classes = useStyles();
  const content = (
    <Box>
      <List component="nav">
        {items.map((item) => (
          <NavItem
            href={item.href}
            key={item.title}
            title={item.title}
            icon={item.icon}
            submenu={item.children ? item.children : null}
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            onCloseSidebar={onCloseSidebar}
          />
        ))}
      </List>
    </Box>
  );

  return (
    <Fragment>
      <Hidden lgUp implementation="css">
        <Drawer
          anchor="left"
          onClose={onCloseSidebar}
          open={openSidebar}
          variant="temporary"
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          anchor="left"
          open
          variant="persistent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          {content}
        </Drawer>
      </Hidden>
    </Fragment>
  );
};

export default Sidebar;
