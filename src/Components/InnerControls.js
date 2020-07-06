import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    marginLeft: 20
  }
}));

const InnerControls = ({ onChangeArray }) => {
  const classes = useStyles();
  const [numOfItemsToAdd, setNumOfItemsToAdd] = useState(1);

  return (
    <div className={classes.root}>
      <div>this component gets its dimensions from the outside</div>
      <TextField
        value={numOfItemsToAdd}
        label="number of items to add"
        type="number"
        onChange={(e) => {
          console.log(e.target.value);
          setNumOfItemsToAdd(parseInt(e.target.value));
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          const array = new Array(numOfItemsToAdd).fill(0);
          onChangeArray(array);
        }}
      >
        add items
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => {
          setNumOfItemsToAdd(1);
          onChangeArray([]);
        }}
      >
        clear items
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => {
          //  onScrollToBottom()
        }}
      >
        scroll to bottom
      </Button>
    </div>
  );
};

export default InnerControls;
