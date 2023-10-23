import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
  },
  label: {
    color: theme.palette.white,
    fontWeight: "bold",
    // textTransform: 'none'
  },
}));

export default function Button(props) {
  const { text, size, color, variant, onClick, ...other } = props;
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant || "contained"}
      disableElevation
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    >
      {text}
    </MuiButton>
  );
}
