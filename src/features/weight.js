import React from "react";
import { Grid, TextField, Button, withStyles } from "@material-ui/core";
import ActionButtons from "./action-buttons";

const styles = theme => ({
  ml4: {
    marginLeft: "20px"
  },
  mt4: {
    marginTop: "20px"
  }
});
class Weight extends React.Component {
  state = { weight: this.props.context };
  handleChange = event => {
    this.setState({ weight: event.target.value });
  };
  action = type => {
    this.props.updateContextData(this.state.weight, this.props.contextName);
    this.props.onAction(type);
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <TextField
            label="Weight"
            fullWidth
            value={this.state.weight}
            onChange={event => this.handleChange(event)}
          />
        </Grid>
        <div className={classes.mt4}>
          <ActionButtons next={this.action} prev={this.action} />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Weight);
