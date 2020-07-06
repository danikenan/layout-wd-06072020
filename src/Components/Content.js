import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDimensions } from "../Hooks/useDimensions";

const margin = 20;
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    paddingTop: margin,
    paddingLeft: margin
  },
  mainChart: {
    backgroundColor: "mintcream",
    border: 1,
    borderStyle: "solid",
    boxSizing: "border-box"
  },
  highSomething: {
    height: 2000
  }
}));

const Content = ({ dimensions }) => {
  const classes = useStyles({ dimensions });
  const myRef = useRef(null);

  const [innerDimensions] = useDimensions(myRef);

  console.log(innerDimensions);
  return (
    <div className={classes.root} ref={myRef}>
      <div
        className={classes.mainChart}
        style={{
          width: innerDimensions.width - margin * 2,
          height: dimensions.height - margin * 2
        }}
      >
        this component gets its dimensions fixed
      </div>
      <div className={classes.highSomething} />
    </div>
  );
};

export default Content;
