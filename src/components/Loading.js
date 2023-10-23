import React, { useContext, Fragment } from "react";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AuthenContext from "../utils/useAuthentication";

const useStyles = makeStyles((theme) => ({
  loadingContainer: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 9999,
    position: "fixed",
  },
}));

export default function Loading() {
  const classes = useStyles();
  const { isLoading } = useContext(AuthenContext);
  console.log("isLoading => ", isLoading);
  if (isLoading) {
    return (
      <div className={classes.loadingContainer}>
        <CircularProgress size="100px" />
      </div>
    );
  }
  return <Fragment></Fragment>;
}
