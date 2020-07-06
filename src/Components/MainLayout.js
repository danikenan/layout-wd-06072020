import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "./Content";
import { useDimensions } from "../Hooks/useDimensions";

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
    backgroundColor: "whitesmoke",
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
  }
}));

const MainLayout = (props) => {
  const classes = useStyles();
  const contentWrapperRef = useRef(null);

  const [dimensions] = useDimensions(contentWrapperRef);
  return (
    <div className={classes.root}>
      <div className={classes.header}></div>
      <div className={classes.main}>
        <div className={classes.navbar}></div>
        <div className={classes.contentWrapper} ref={contentWrapperRef}>
          <div className={classes.content}>
            <Content dimensions={dimensions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
