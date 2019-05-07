import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { withTheme, withStyles } from "@material-ui/core/styles";

import AddIcon from "@material-ui/icons/Add";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SettingsIcon from "@material-ui/icons/Settings";

import CreateGamePanel from "./components/panels/CreateGamePanel";
import JoinGamePanel from "./components/panels/JoinGamePanel";
import SettingsPanel from "./components/panels/SettingsPanel";

const _styles = theme => ({
  rootContainer: {},
  toolbarButton: {
    marginRight: theme.spacing.unit
  },
  flex: {
    display: "flex"
  },
  grow: {
    flexGrow: 1
  },
  mainContentContainer: {
    position: "relative",
    background: "green"
  },
  sidePanelsContainer: {
    position: "absolute",
    width: 400,
    top: theme.spacing.unit,
    right: theme.spacing.unit
  }
});

class App extends Component {
  state = {
    sidePanelsContent: null,
    sidePanelContentFlag: ""
  };

  componentDidMount() {
    document.body.style.background = this.props.theme.palette.background.default;
  }

  componentWillUnmount() {
    document.body.style.background = "";
  }

  /**
   * If the current panel's flag match the parameter, toggle the panel,
   * otherwise, use the panel parameter as the new panel
   * @param panel
   * @param {string} panelFlag
   */
  toggleOrSwitchSidePanel(panel, panelFlag) {
    const { sidePanelsContent, sidePanelContentFlag } = this.state;

    if (sidePanelContentFlag === panelFlag) {
      if (sidePanelsContent) {
        this.setState({ sidePanelsContent: null, sidePanelContentFlag: "" });
      } else {
        this.setState({ sidePanelsContent: panel });
      }
    } else {
      this.setState({
        sidePanelsContent: panel,
        sidePanelContentFlag: panelFlag
      });
    }
  }

  onCreateGameClicked = () => {
    this.toggleOrSwitchSidePanel(
      <CreateGamePanel onClose={this.onSidePanelClose} />,
      "create"
    );
  };

  onJoinGameClicked = () => {
    this.toggleOrSwitchSidePanel(
      <JoinGamePanel onClose={this.onSidePanelClose} />,
      "join"
    );
  };

  onSettingsClicked = () => {
    this.toggleOrSwitchSidePanel(
      <SettingsPanel onClose={this.onSidePanelClose} />,
      "settings"
    );
  };

  onSidePanelClose = () => {
    this.setState({ sidePanelsContent: null, sidePanelContentFlag: "" });
  };

  render() {
    const { classes } = this.props;
    const { sidePanelsContent } = this.state;
    return (
      <div className={classes.rootContainer}>
        <AppBar position="static">
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
              <IconButton
                className={classes.toolbarButton}
                color="inherit"
                onClick={this.onSettingsClicked}
              >
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <div className={classes.mainContentContainer}>
          <div className={classes.sidePanelsContainer}>{sidePanelsContent}</div>
        </div>
      </div>
    );
  }
}

export default withTheme()(withStyles(_styles)(App));
