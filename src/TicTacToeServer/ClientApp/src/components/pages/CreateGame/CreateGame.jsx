import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepContent from "@material-ui/core/StepContent";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import CardPage from "../../ui/CardPage";

const _styles = theme => ({});

const _steps = ["Room Configuration", "Invitation Configuration"];

class CreateGame extends Component {
  state = {
    activeStep: 0
  };

  onNextClicked = () => {
    this.setState({ activeStep: this.state.activeStep + 1 });
  };

  onBackClicked = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };

  render() {
    const { activeStep } = this.state;
    return (
      <CardPage title="Create Game">
        <Stepper activeStep={activeStep} orientation="vertical">
          {_steps.map((value, index) => {
            return (
              <Step key={index}>
                <StepLabel>
                  <Typography>{value}</Typography>
                </StepLabel>
                <StepContent>
                  {index === 0 ? null : (
                    <Button color="primary" onClick={this.onBackClicked}>
                      Back
                    </Button>
                  )}
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={this.onNextClicked}
                  >
                    Next
                  </Button>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
      </CardPage>
    );
  }
}

export default withStyles(_styles)(CreateGame);
