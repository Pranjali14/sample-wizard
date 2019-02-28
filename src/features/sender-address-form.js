import React from "react";
import AddressForm from "./address-form";
import { Button } from "@material-ui/core";
import ActionButtons from "./action-buttons";

class SenderAddressForm extends React.Component {
  state = { name: "pt", ...this.props.context };
  handleChange = (event, key) => {
    this.setState({ [key]: event.target.value });
  };
  next = type => {
    //perform validation and update the wizard context
    const updatedContext = { ...this.state };
    this.props.updateContextData(updatedContext, this.props.contextName);
    this.props.onAction(type);
  };

  render() {
    return (
      <React.Fragment>
        <AddressForm formValues={this.state} handleChange={this.handleChange} />
        <ActionButtons next={this.next} />
      </React.Fragment>
    );
  }
}

export default SenderAddressForm;
