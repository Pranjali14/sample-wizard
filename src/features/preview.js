import React from "react";
import { Typography, Paper, Card, withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
    flex: 1
  },
  card: {
    minWidth: 275,
    maxWidth: 500,
    marginLeft: 30,
    textAlign: "left",
    padding: "0 20px"
  }
});
const PreviewShippingData = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <h3>Address Details</h3>
      <div className={classes.root}>
        <Card className={classes.card}>
          <h5>From Address </h5>
          <hr />
          {getAddressHtml(props.data.from)}
        </Card>
        <Card className={classes.card}>
          <h5>To Address:</h5>
          <hr />
          {getAddressHtml(props.data.to)}
        </Card>
        <Card className={classes.card}>
          <h5>Total Cost</h5>
          <hr />
          <p>
            Shipping Amount:
            <b>
              {calculateShippingAmount(
                props.data.weight,
                props.data.shippingOption
              )}
            </b>
          </p>
        </Card>
      </div>
    </React.Fragment>
  );
};

function calculateShippingAmount(weight, shippingOption) {
  const shippingRate = 0.4;
  const shippingCost =
    weight * shippingRate * (shippingOption === "ground" ? 1 : 1.5);
  return shippingCost;
}
function getAddressHtml(data) {
  return (
    <React.Fragment>
      <p>Name: {data.name}</p>
      <p>Street: {data.street}</p>
      <p>City: {data.city}</p>
      <p>State: {data.state}</p>
      <p>Zip: {data.zip}</p>
    </React.Fragment>
  );
}

export default withStyles(styles)(PreviewShippingData);
