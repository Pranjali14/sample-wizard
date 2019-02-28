import React from "react";
import Wizard from "../core/components/wizard";
import Weight from "./weight";
import ShippingOption from "./shipping-option";
import SenderAddressForm from "./sender-address-form";
import ReceiverAddressForm from "./receiver-address-form";
import Confirmation from "./confirmation";
import { Button, withStyles, Paper } from "@material-ui/core";
import PreviewShippingData from "./preview";

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: 1080,
    margin: "0 auto",
    marginTop: "30px",
    textAlign: "center",
    padding: "30px"
  },
  mainButton: {
    margin: "0 auto"
  }
};

const steps = [
  {
    name: "Enter Sender's Address",
    component: <SenderAddressForm />,
    contextName: "from"
  },
  {
    name: "Enter Receiver's Address",
    component: <ReceiverAddressForm />,
    contextName: "to"
  },
  { name: "Enter Weight", component: <Weight />, contextName: "weight" },
  {
    name: "Choose Shipping Option",
    component: <ShippingOption />,
    contextName: "shippingOption"
  },
  {
    name: "Confirmation",
    component: <Confirmation />,
    contextName: ""
  }
];
class ShippingLabelMaker extends React.Component {
  state = {
    wizardContext: {
      from: {
        name: "",
        street: "",
        city: "",
        state: "",
        zip: ""
      },
      to: { name: "", street: "", city: "", state: "", zip: "" },
      weight: "",
      shippingOption: ""
    },
    showWizard: false,
    showShippingLable: false
  };

  onComplete = shippingAddressDetails => {
    this.setState(prevState => ({
      ...prevState,
      wizardContext: {
        ...shippingAddressDetails,
        from: { ...shippingAddressDetails.from },
        to: { ...shippingAddressDetails.to }
      },
      showWizard: false,
      showShippingLable: true
    }));
  };

  resetWizardContext = () => {
    this.setState({
      wizardContext: {
        from: {
          name: "",
          street: "",
          city: "",
          state: "",
          zip: ""
        },
        to: { name: "", street: "", city: "", state: "", zip: "" },
        weight: "",
        shippingOption: ""
      }
    });
  };
  generateNewLabel = () => {
    this.resetWizardContext();
    this.setState({ showWizard: true, showShippingLable: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        {!this.state.showWizard || this.state.showShippingLable ? (
          <Button
            className={classes.mainButton}
            variant="contained"
            color="primary"
            onClick={this.generateNewLabel}
          >
            New Label
          </Button>
        ) : null}
        {this.state.showWizard ? (
          <Wizard
            steps={steps}
            onComplete={this.onComplete}
            wizardContext={this.state.wizardContext}
          />
        ) : null}
        {this.state.showShippingLable ? (
          <PreviewShippingData data={this.state.wizardContext} />
        ) : null}
      </Paper>
    );
  }
}
export default withStyles(styles)(ShippingLabelMaker);
