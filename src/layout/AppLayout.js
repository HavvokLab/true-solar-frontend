import { Fragment, useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Hidden, Button } from "@material-ui/core";
import { ExitToApp, Menu } from "@material-ui/icons";

import AuthenContext from "../utils/useAuthentication";
import logoImg from "../assets/images/true-logo.png";
import Sidebar from "../components/Sidebar";
import { drawerWidth } from "../constants";

const useStyles = makeStyles((theme) => ({
  appBar: {
    // background: theme.palette.primary,
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.white,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  container: {
    padding: "20px",
    [theme.breakpoints.up("lg")]: {
      marginLeft: `${drawerWidth}px`,
    },
  },
  logoImg: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  logoutButton: {
    color: "white",
  },
}));
export default function AppLayout({ children }) {
  const { logout: logoutFn } = useContext(AuthenContext);
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const [openOnMobile, setOpenOnMobile] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(location.pathname);

  const logout = () => {
    logoutFn();
    history.push("/login");
  };
  return (
    <Fragment>
      <AppBar elevation={4} className={classes.appBar}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <Hidden lgUp>
            <IconButton color="inherit" onClick={() => setOpenOnMobile(true)}>
              <Menu />
            </IconButton>
          </Hidden>
          <img
            onClick={() => history.push("/dashboard")}
            src={logoImg}
            className={classes.logoImg}
            alt="logoImg"
            height="50px"
          />
          <Button
            className={classes.logoutButton}
            endIcon={<ExitToApp />}
            onClick={logout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Sidebar
        openSidebar={openOnMobile}
        onCloseSidebar={() => setOpenOnMobile(false)}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      <div className={classes.container}>{children}</div>
    </Fragment>
  );
}
