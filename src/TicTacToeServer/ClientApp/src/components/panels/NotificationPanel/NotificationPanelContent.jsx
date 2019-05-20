import React, { Component } from "react";
import { withSnackbar } from "notistack";

class NotificationPanelContent extends Component {
  render() {
    return <div />;
  }
}

export default withSnackbar(NotificationPanelContent);
