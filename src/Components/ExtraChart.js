import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "slategray",
    height: 200,
    flex: 1,
    marginTop: 30
  }
}));

const ExtraChart = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div />
    </div>
  );
};

export default ExtraChart;
