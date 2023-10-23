import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Collapse,
  Typography,
} from "@material-ui/core";
import theme from "../constants/theme";

const SubMenuListItem = withStyles({
  root: {
    color: theme.palette.textColor,
    "&$selected": {
      color: theme.palette.activeColor,
      backgroundColor: theme.palette.white,
      "& .MuiListItemIcon-root": {
        color: theme.palette.activeColor,
      },
    },
  },
  selected: {},
})(MuiListItem);

const ListItem = withStyles({
  root: {
    color: theme.palette.textColor,
    "&$selected": {
      color: theme.palette.activeColor,
      "& .MuiListItemText-root": {
        fontWeight: "bold !important",
      },
      "& .MuiListItemIcon-root": {
        color: theme.palette.activeColor,
      },
    },
  },
  selected: {},
})(MuiListItem);

const NavItem = ({
  href,
  icon: Icon,
  title,
  submenu,
  selectedMenu,
  setSelectedMenu,
  onCloseSidebar,
}) => {
  const useStyles = makeStyles((muiTheme) => ({
    root: {
      marginLeft: "5px",
      color: muiTheme.palette.textColor,
    },
    selected: {
      color: muiTheme.palette.activeColor,
    },
    title: {
      color:
        selectedMenu === href ? muiTheme.palette.activeColor : "currentColor",
      fontWeight: selectedMenu === href ? "bold" : "normal",
      marginLeft: "-10px",
    },
    nested: {
      paddingLeft: muiTheme.spacing(4),
    },
  }));

  const classes = useStyles();
  const history = useHistory();

  const handleSelectMenu = (path) => {
    setSelectedMenu(path);
    onCloseSidebar();
    history.push(path);
  };

  if (submenu) {
    return (
      <Fragment>
        <ListItem
          button
          selected={selectedMenu.includes(href)}
          onClick={() => handleSelectMenu(href)}
        >
          <ListItemIcon>{Icon}</ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography
                type="body2"
                style={
                  selectedMenu.includes(href)
                    ? { fontWeight: "bold" }
                    : { fontWeight: "normal" }
                }
              >
                {title}
              </Typography>
            }
          />
          {/* {isOpen ? <ExpandLess /> : <ExpandMore />} */}
        </ListItem>
        <Collapse in={true} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {submenu.map((i) => {
              if (selectedMenu === i.href) {
                console.log("selectedMenu", selectedMenu, i.href);
              }
              return (
                <SubMenuListItem
                  selected={selectedMenu === i.href}
                  button
                  className={classes.nested}
                  onClick={() => handleSelectMenu(i.href)}
                >
                  <ListItemIcon />
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        type="body2"
                        style={
                          selectedMenu === i.href
                            ? { fontWeight: "bold" }
                            : { fontWeight: "normal" }
                        }
                      >
                        {i.title}
                      </Typography>
                    }
                  />
                </SubMenuListItem>
              );
            })}
          </List>
        </Collapse>
      </Fragment>
    );
  } else
    return (
      <ListItem
        button
        selected={selectedMenu === href}
        onClick={() => handleSelectMenu(href)}
      >
        <ListItemIcon
          classes={{
            root: classes.root,
            selected: classes.selected,
          }}
        >
          {Icon}
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={
            <Typography
              type="body2"
              style={
                selectedMenu === href
                  ? { fontWeight: "bold" }
                  : { fontWeight: "normal" }
              }
            >
              {title}
            </Typography>
          }
        />
      </ListItem>
    );
};

export default NavItem;
