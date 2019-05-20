import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import { createGame } from "../../../services/createGame";

const _styles = theme => ({
  inputRow: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  inputField: {
    width: "100%"
  }
});

class CreateGamePanel extends Component {
  state = {
    size: "",
    username: "",
    invitationCode: ""
  };

  onSizeInputChanged = e => {
    this.setState({ size: e.target.value });
  };

  onUserNameInputChanged = e => {
    this.setState({ username: e.target.value });
  };

  onInvitationCodeInputChanged = e => {
    this.setState({ invitationCode: e.target.value });
  };

  onCloseClicked = () => {
    this.props.onClose();
  };

  onCreateClicked = async () => {
    const { size, username, invitationCode } = this.state;

    var response = await createGame({
      size,
      username,
      invitationCode
    });
  };

  render() {
    const { classes } = this.props;
    const { size, username, invitationCode } = this.state;

    return (
      <Card>
        <CardContent>
          <Typography variant="h6">Create Game</Typography>
          <div className={classes.inputRow}>
            <TextField
              className={classes.inputField}
              label="Size"
              variant="filled"
              value={size}
              onChange={this.onSizeInputChanged}
            />
          </div>
          <div className={classes.inputRow}>
            <TextField
              className={classes.inputField}
              label="Your Name"
              variant="filled"
              value={username}
              onInput={this.onUserNameInputChanged}
            />
          </div>
          <div className={classes.inputRow}>
            <TextField
              className={classes.inputField}
              label="Invitation Code"
              variant="filled"
              value={invitationCode}
              onInput={this.onInvitationCodeInputChanged}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button color="primary">Create</Button>
          <Button color="secondary" onClick={this.onCloseClicked}>
            Close
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(_styles)(CreateGamePanel);
