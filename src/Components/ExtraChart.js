import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "slategray",
    height: theme.spacing(30),
    flex: 1,
    marginTop: theme.spacing(2)
  }
}));

const ExtraChart = (props) => {
  const classes = useStyles();

  return <div className={classes.root} />;
};

export default ExtraChart;
