import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";

const _styles = theme => ({
  inputRow: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  confirmRow: {
    marginTop: 2 * theme.spacing.unit
  },
  confirmButton: {
    width: "100%"
  }
});

class JoinGamePanel extends Component {
  render() {
    return (
      <Card>
        <CardContent>Join Game</CardContent>
      </Card>
    );
  }
}

export default withStyles(_styles)(JoinGamePanel);
