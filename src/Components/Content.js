import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExtraChart from "./ExtraChart";
import InnerControls from "./InnerControls";
import { withResizeDetector } from "react-resize-detector";
import { Button } from "@material-ui/core";

const margin = 20;
const initialSideWidth = 100;
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
    display: "flex"
  },
  chartHeader: {
    height: 50,
    backgroundColor: "aliceblue",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  mainChart: {
    backgroundColor: "mintcream",
    border: 1,
    borderStyle: "solid",
    boxSizing: "border-box"
  },
  chartSide: {
    backgroundColor: "teal"
  }
}));

const Content = ({ dimensions, onAddChart, width, outsideHeight }) => {
  const classes = useStyles({ dimensions });
  const [sideWidth, setSideWidth] = useState(initialSideWidth);

  const [arrayToAdd, setArrayToAdd] = useState([]);
  const [mainChartWidth, setMainChartWidth] = useState(width - sideWidth);

  console.log(mainChartWidth);
  useEffect(() => {
    onAddChart();
  }, [arrayToAdd, onAddChart]);

  useEffect(() => {
    setMainChartWidth(width - sideWidth);
  }, [width, sideWidth]);

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
          <div
            className={classes.mainChart}
            style={{
              width: mainChartWidth,
              height: outsideHeight - margin * 2 - 50
            }}
          >
            <InnerControls
              onChangeArray={(newArray) => {
                setArrayToAdd(newArray);
              }}
            />
          </div>
          <div className={classes.chartSide} style={{ width: sideWidth }} />
        </div>
      </div>
      {arrayToAdd.map(() => (
        <ExtraChart />
      ))}
    </div>
  );
};

export default withResizeDetector(Content);
