import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const _styles = theme => ({
  inputRow: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  inputField: {
    width: "100%"
  }
});

class JoinGamePanel extends Component {
  state = {
    size: "",
    username: "",
    invitationCode: ""
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

  render() {
    const { classes } = this.props;
    const { username, invitationCode } = this.state;

    return (
      <Card>
        <CardContent>
          <Typography variant="h6">Join Game</Typography>
          <div className={classes.inputRow}>
            <TextField
              className={classes.inputField}
              label="Your Name"
              variant="filled"
              value={username}
              onChange={this.onUserNameInputChanged}
            />
          </div>
          <div className={classes.inputRow}>
            <TextField
              className={classes.inputField}
              label="Invitation Code"
              variant="filled"
              value={invitationCode}
              onChange={this.onInvitationCodeInputChanged}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button color="primary">Join</Button>
          <Button color="secondary" onClick={this.onCloseClicked}>
            Close
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(_styles)(JoinGamePanel);
