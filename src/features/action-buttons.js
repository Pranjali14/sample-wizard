import React from "react";
import { Button, withStyles } from "@material-ui/core";

const styles = theme => ({
  mt4: {
    marginTop: "20px"
  },
  ml4: {
    marginLeft: "20px"
  }
});
const ActionButtons = props => {
  const { classes } = props;
  return (
    <div className={classes.mt4}>
      {props.prev ? (
        <Button variant="contained" onClick={() => props.prev("prev")}>
          Prev
        </Button>
      ) : null}
      {props.next ? (
        <Button
          className={classes.ml4}
          variant="contained"
          color="primary"
          onClick={() => props.next("next")}
        >
          Next
        </Button>
      ) : null}
      {props.end ? (
        <Button
          className={classes.ml4}
          variant="contained"
          color="primary"
          onClick={() => props.end("end")}
        >
          Confirm
        </Button>
      ) : null}
    </div>
  );
};

export default withStyles(styles)(ActionButtons);
