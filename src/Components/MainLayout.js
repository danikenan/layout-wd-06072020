import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "./Content";
import ReactResizeDetector from "react-resize-detector";

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
  const endRef = useRef(null);

  const handleAddChart = () => {
    console.log("should scroll");
    endRef.current.scrollIntoView({ behavior: "smooth" });

    // contentWrapperRef.current.scrollToBottom();
  };
  return (
    <div className={classes.root}>
      <div className={classes.header}></div>
      <div className={classes.main}>
        <div className={classes.navbar}></div>
        <ReactResizeDetector handleHeight>
          {({ height }) => (
            <div className={classes.contentWrapper}>
              <div className={classes.content}>
                <Content outsideHeight={height} onAddChart={handleAddChart} />
                <div ref={endRef} />
              </div>
            </div>
          )}
        </ReactResizeDetector>
      </div>
    </div>
  );
};

export default MainLayout;
