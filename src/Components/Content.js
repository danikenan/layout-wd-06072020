import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExtraChart from "./ExtraChart";
import InnerControls from "./InnerControls";
import { withResizeDetector } from "react-resize-detector";
import { Button } from "@material-ui/core";

const margin = 20;
const initialSideWidth = 120;
const transition = "0.2s ease-in-out";

const useStyles = makeStyles((theme) => ({
  contentRoot: {
    padding: margin,
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
    height: 50,
    backgroundColor: "black",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  mainChart: {
    backgroundColor: "mintcream",
    border: 1,
    borderStyle: "solid",
    boxSizing: "border-box",
    transition,
    width: (props) => props.mainChartWidth,
    height: (props) => props.outsideHeight - margin * 2 - 50,
    zIndex: 10
  },
  chartSide: {
    transition,
    backgroundColor: "teal",
    width: initialSideWidth,
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    transform: (props) => `translate(${props.sideWidth === 0 ? "120px" : 0})`
  },
  chartSideHidden: {
    backgroundColor: "blue"
  }
}));

const Content = ({ onAddChart, width, outsideHeight }) => {
  const [sideWidth, setSideWidth] = useState(initialSideWidth);
  const [mainChartWidth, setMainChartWidth] = useState(width - sideWidth);

  const [arrayToAdd, setArrayToAdd] = useState([]);

  useEffect(() => {
    onAddChart();
  }, [arrayToAdd, onAddChart]);

  useEffect(() => {
    setMainChartWidth(width - sideWidth);
  }, [width, sideWidth]);

  const classes = useStyles({ sideWidth, mainChartWidth, outsideHeight });

  return (
    <div className={classes.contentRoot}>
      <div className={classes.mainChartWrapper}>
        <div className={classes.chartHeader}>
          chart header
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              setSideWidth((prevState) =>
                prevState === initialSideWidth ? 0 : initialSideWidth
              );
            }}
          >
            toggle side
          </Button>
        </div>
        <div className={classes.mainChartInnerWrapper}>
          <div className={classes.mainChart}>
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
