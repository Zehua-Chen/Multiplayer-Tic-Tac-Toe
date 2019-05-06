import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { withTheme, withStyles } from "@material-ui/core/styles";

import AddIcon from "@material-ui/icons/Add";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoIcon from "@material-ui/icons/Info";

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
  componentDidMount() {
    document.body.style.background = this.props.theme.palette.background.default;
  }

  componentWillUnmount() {
    document.body.style.background = "";
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar>
          <Toolbar className={classes.flex}>
            <div className={classes.grow}>
              <Tooltip title="Create New Game">
                <IconButton className={classes.toolbarButton} color="inherit">
                  <AddIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Join Game">
                <IconButton className={classes.toolbarButton} color="inherit">
                  <PlayArrowIcon />
                </IconButton>
              </Tooltip>
            </div>
            <Tooltip title="Game Information">
              <IconButton className={classes.toolbarButton} color="inherit">
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withTheme()(withStyles(_styles)(App));
