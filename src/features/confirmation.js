import React from "react";
import { Typography, Button } from "@material-ui/core";
import ActionButtons from "./action-buttons";

const Confirmation = props => {
  return (
    <React.Fragment>
      <Typography>Gengerate shipping label?</Typography>
      <ActionButtons prev={props.onAction} end={props.onAction} />
    </React.Fragment>
  );
};

export default Confirmation;
