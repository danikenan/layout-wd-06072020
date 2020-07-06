import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExtraChart from "./ExtraChart";
import InnerControls from "./InnerControls";
import { withResizeDetector } from "react-resize-detector";

const margin = 20;
const useStyles = makeStyles((theme) => ({
  contentRoot: {
    padding: margin,
    flex: 1,
    boxSizing: "border-box"
  },
  mainChart: {
    backgroundColor: "mintcream",
    border: 1,
    borderStyle: "solid",
    boxSizing: "border-box"
  }

  // highSomething: {
  //   height: 2000,
  //   backgroundColor: "green"
  // }
}));

const Content = ({ dimensions, onAddChart, width, outsideHeight }) => {
  const classes = useStyles({ dimensions });

  console.log("width", width);
  const [arrayToAdd, setArrayToAdd] = useState([]);

  return (
    <div className={classes.contentRoot}>
      <div
        className={classes.mainChart}
        style={{
          width: width,
          height: outsideHeight - margin * 2 - 1
        }}
      >
        <InnerControls
          onChangeArray={(newArray) => {
            setArrayToAdd(newArray);
          }}
        />
      </div>
      {arrayToAdd.map((item) => (
        <ExtraChart />
      ))}
    </div>
  );
};

export default withResizeDetector(Content);
