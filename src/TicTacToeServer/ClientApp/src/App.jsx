import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withTheme, withStyles } from "@material-ui/core/styles";

import AddIcon from "@material-ui/icons/Add";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SettingsIcon from "@material-ui/icons/Settings";

import CreateGameForm from "./components/ui/CreateGameForm";
import JoinGameForm from "./components/ui/JoinGameForm";

const _styles = theme => ({
  toolbarButton: {
    marginRight: theme.spacing.unit
  },
  flex: {
    display: "flex"
  },
  grow: {
    flexGrow: 1
  }
});

class App extends Component {
  state = {
    isDialogOpen: false,
    dialogTitle: "",
    dialogContent: null
  };

  componentDidMount() {
    document.body.style.background = this.props.theme.palette.background.default;
  }

  componentWillUnmount() {
    document.body.style.background = "";
  }

  onDialogClose = () => {
    this.setState({
      isDialogOpen: false,
      dialogTitle: "",
      dialogContent: null
    });
  };

  onCreateGameClicked = () => {
    this.setState({
      isDialogOpen: true,
      dialogTitle: "Create Game",
      dialogContent: <CreateGameForm />
    });
  };

  onJoinGameClicked = () => {
    this.setState({
      isDialogOpen: true,
      dialogTitle: "Join Game",
      dialogContent: <JoinGameForm />
    });
  };

  render() {
    const { classes } = this.props;
    const { isDialogOpen, dialogTitle, dialogContent } = this.state;
    return (
      <div>
        <AppBar>
          <Toolbar className={classes.flex}>
            <div className={classes.grow}>
              <Tooltip title="Create New Game">
                <IconButton
                  className={classes.toolbarButton}
                  color="inherit"
                  onClick={this.onCreateGameClicked}
                >
                  <AddIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Join Game">
                <IconButton
                  className={classes.toolbarButton}
                  color="inherit"
                  onClick={this.onJoinGameClicked}
                >
                  <PlayArrowIcon />
                </IconButton>
              </Tooltip>
            </div>
            <Tooltip title="Settings">
              <IconButton className={classes.toolbarButton} color="inherit">
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <Dialog open={isDialogOpen} onClose={this.onDialogClose}>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogContent>{dialogContent}</DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withTheme()(withStyles(_styles)(App));
