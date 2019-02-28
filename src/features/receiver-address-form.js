import React from "react";
import AddressForm from "./address-form";
import { Button } from "@material-ui/core";
import ActionButtons from "./action-buttons";

class ReceiverAddressForm extends React.Component {
  state = { ...this.props.context };
  handleChange = (event, key) => {
    this.setState({ [key]: event.target.value });
  };
  action = type => {
    //perform validation and update the wizard context
    const updatedContext = { ...this.state };
    this.props.updateContextData(updatedContext, this.props.contextName);
    this.props.onAction(type);
  };

  render() {
    return (
      <React.Fragment>
        <AddressForm formValues={this.state} handleChange={this.handleChange} />
        <ActionButtons next={this.action} prev={this.action} />
      </React.Fragment>
    );
  }
}

export default ReceiverAddressForm;
