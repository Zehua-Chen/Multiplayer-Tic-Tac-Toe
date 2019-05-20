import React, { Component } from "react";
import { SnackbarProvider } from "notistack";
import NotificationPanelContent from "./NotificationPanelContent";

class NotificationPanel extends Component {
  render() {
    return (
      <SnackbarProvider maxSnack={3}>
        <NotificationPanelContent />
      </SnackbarProvider>
    );
  }
}

export default NotificationPanel;
