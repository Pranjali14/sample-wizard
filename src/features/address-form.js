import React from "react";
import Proptypes from "prop-types";
import { Grid, TextField, Button } from "@material-ui/core";

class AddressForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Name"
              fullWidth
              value={this.props.formValues.name}
              onChange={event => this.props.handleChange(event, "name")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              label="Street"
              value={this.props.formValues.street}
              fullWidth
              onChange={event =>
                this.props.handleChange(event, "street", this.props.type)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="City"
              fullWidth
              value={this.props.formValues.city}
              onChange={event =>
                this.props.handleChange(event, "city", this.props.type)
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="State"
              fullWidth
              value={this.props.formValues.state}
              onChange={event =>
                this.props.handleChange(event, "state", this.props.type)
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Zip "
              value={this.props.formValues.zip}
              fullWidth
              onChange={event =>
                this.props.handleChange(event, "zip", this.props.type)
              }
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
AddressForm.propTypes = {
  handleChange: Proptypes.func.isRequired,
  type: Proptypes.string,
  formValues: Proptypes.object.isRequired,
  onAction: Proptypes.func.isRequired
};

export default AddressForm;
