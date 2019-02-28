import React from "react";
import {
  Grid,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  withStyles
} from "@material-ui/core";
import ActionButtons from "./action-buttons";

const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

class ShippingOption extends React.Component {
  state = { shippingOption: this.props.context };
  handleChange = event => {
    this.setState({ shippingOption: event.target.value });
  };

  action = type => {
    this.props.updateContextData(
      this.state.shippingOption,
      this.props.contextName
    );
    this.props.onAction(type);
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <RadioGroup
            aria-label="shipping-option"
            name="shippingOption"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="ground"
              control={<Radio />}
              label="Ground"
            />
            <FormControlLabel
              value="priority"
              control={<Radio />}
              label="Priority"
            />
          </RadioGroup>
        </Grid>
        <ActionButtons next={this.action} prev={this.action} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ShippingOption);
