import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExtraChart from "./ExtraChart";
import InnerControls from "./InnerControls";
import { withResizeDetector } from "react-resize-detector";
import { Button } from "@material-ui/core";

const transitionDuration = 250;
const useStyles = makeStyles((theme) => {
  const initialSideWidth = theme.spacing(30);
  const transitionTimingFunction = theme.transitions.easing.easeInOut;
  const generalMargin = theme.spacing(2);
  const headerHeight = theme.spacing(7);

  return {
    contentRoot: {
      padding: generalMargin,
      flex: 1,
      boxSizing: "border-box"
    },
    mainChartWrapper: {
      display: "flex",
      flexDirection: "column"
    },
    mainChartInnerWrapper: {
      display: "flex",
      justifyContent: "space-between",
      overflow: "hidden",
      position: "relative"
    },
    chartHeader: {
      padding: `0 ${theme.spacing(2)}px`,
      height: headerHeight,
      backgroundColor: "black",
      color: "white",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
      alignItems: "center",
      fontSize: theme.typography.h4.fontSize
    },
    mainChart: {
      backgroundColor: "mintcream",
      transitionTimingFunction,
      transitionDuration,
      width: (props) =>
        props.isSideOpen ? props.width - initialSideWidth : props.width,
      height: (props) => props.outsideHeight - generalMargin * 2 - headerHeight
    },
    chartSide: {
      transitionTimingFunction,
      transitionDuration,
      backgroundColor: "teal",
      width: initialSideWidth,
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      transform: (props) =>
        props.isSideOpen ? null : `translate(${initialSideWidth}px)`
    }
  };
});

const Content = ({ onChangeExtraCharts, width, outsideHeight }) => {
  const [isSideOpen, setIsSideOpen] = useState(true);
  const [arrayToAdd, setArrayToAdd] = useState([]);
  const [widthAnimationDisabled, setWidthAnimationDisabled] = useState(true);

  const timer = useRef();

  useEffect(
    () => () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    },
    []
  );

  useEffect(() => {
    onChangeExtraCharts();
  }, [arrayToAdd, onChangeExtraCharts]);

  const classes = useStyles({
    outsideHeight,
    isSideOpen,
    width
  });

  const onToggleSide = () => {
    setWidthAnimationDisabled(false);
    setIsSideOpen((prevState) => !prevState);
    timer.current = setTimeout(() => {
      setWidthAnimationDisabled(true);
    }, transitionDuration);
  };
  return (
    <div className={classes.contentRoot}>
      <div className={classes.mainChartWrapper}>
        <div className={classes.chartHeader}>
          chart header
          <Button color="primary" variant="contained" onClick={onToggleSide}>
            toggle side
          </Button>
        </div>
        <div className={classes.mainChartInnerWrapper}>
          <div
            className={classes.mainChart}
            style={widthAnimationDisabled ? { transition: "none" } : null}
          >
            <InnerControls
              onChangeArray={(newArray) => {
                setArrayToAdd(newArray);
              }}
            />
          </div>
          <div className={classes.chartSide}>side</div>
        </div>
      </div>
      {arrayToAdd.map(() => (
        <ExtraChart />
      ))}
    </div>
  );
};

export default withResizeDetector(Content);
