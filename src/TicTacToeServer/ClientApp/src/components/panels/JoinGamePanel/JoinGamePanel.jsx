import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
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
        <CardActions>
          <Button
            color="secondary"
            onClick={() => {
              this.props.onClose();
            }}
          >
            Close
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(_styles)(JoinGamePanel);
