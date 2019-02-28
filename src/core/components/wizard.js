import React from "react";
import propTypes from "prop-types";
import { withStyles, Typography } from "@material-ui/core";

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Wizard extends React.Component {
  state = { activeStep: 0, wizardContext: this.props.wizardContext };
  WizardAction = {
    prev: 1,
    next: 2,
    end: 3
  };
  onStepperAction = action => {
    let activeStep = this.state.activeStep;
    switch (this.WizardAction[action]) {
      case 1: {
        if (activeStep > 0) {
          activeStep = activeStep - 1;
          this.setState({ activeStep });
        }
        break;
      }
      case 2: {
        if (activeStep < this.props.steps.length - 1) {
          activeStep = activeStep + 1;
          this.setState({ activeStep });
        }
        break;
      }
      case 3: {
        this.completed();
        break;
      }
      default: {
      }
    }
  };

  completed = () => {
    this.props.onComplete(this.state.wizardContext);
  };

  updateContextData = (data, context) => {
    this.setState(prevState => ({
      ...prevState,
      wizardContext: {
        ...prevState.wizardContext,
        [context]: data
      }
    }));
  };

  render() {
    const stepPointer = this.props.steps[this.state.activeStep];
    const stepContext = stepPointer.contextName
      ? this.state.wizardContext[stepPointer.contextName]
      : null;
    const componentPointer = stepPointer.component;
    const props = {
      ...componentPointer.props,
      onAction: this.onStepperAction,
      updateContextData: this.updateContextData,
      context: stepContext,
      contextName: stepPointer.contextName
    };
    const compToRender = React.cloneElement(componentPointer, props);
    const title = stepPointer.name;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        {compToRender}
      </React.Fragment>
    );
  }
}

Wizard.propTypes = {
  steps: propTypes.array.isRequired,
  wizardContext: propTypes.object.isRequired,
  onComplete: propTypes.func.isRequired
};
export default withStyles(styles)(Wizard);
