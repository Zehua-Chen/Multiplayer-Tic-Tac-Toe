import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

class SettingsPanel extends Component {
  render() {
    return (
      <Card>
        <CardContent>Settings Panel</CardContent>
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

export default SettingsPanel;
