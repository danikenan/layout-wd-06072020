import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  header: {
    width: "100%",
    backgroundColor: "darkgray",
    position: "sticky",
    height: 60,
    zIndex: 2
  },
  main: {
    display: "flex",
    width: "100%",
    overflow: "hidden",
    height: "100%",
    backgroundColor: "lightblue"
  },
  navbar: {
    backgroundColor: "honeydew",
    width: 200,
    overflow: "auto"
  },
  contentWrapper: {
    flexDirection: "column",
    backgroundColor: "gainsboro",
    flex: 1,
    overflow: "auto",
    position: "relative",
    padding: theme.spacing.l2,
    display: "flex"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    width: "100%",
    flex: 1,
    overflow: "visible"
  },
  highSomething: {
    height: 2000
  }
}));

const MainLayout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}></div>
      <div className={classes.main}>
        <div className={classes.navbar}></div>
        <div className={classes.contentWrapper}>
          <div className={classes.content}>
            <div className={classes.highSomething}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
