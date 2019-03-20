import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import axios from "axios";
import { connect } from "react-redux";
import withStyles from "react-jss";

import Password from "../../ui/Password";
import mapStateToProps from "./mapStateToProps";

import {
  UPDATE_WELCOME_MODE,
  UPDATE_ERROR_MESSAGE,
  UPDATE_INVITATION_CODE,
  UPDATE_PLAYER_NAME,
  UPDATE_PASSWORD
} from "../../../actions/IWelcomeAction";
import { UPDATE_PLAYER_NAMES_LIST } from "../../../actions/IPlayersAction";

const style = {
  enter: {
    opacity: 0
  },

  enterActive: {
    opacity: 1,
    transition: "300ms ease-in-out"
  },

  leave: {
    opacity: 1
  },

  leaveActive: {
    opacity: 0,
    transition: "300ms ease-in-out"
  }
};

/**
 * Welcome panel offers the user the option to either create a new game
 * or joing an existing game.
 */
class WelcomePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerName: "",
      invitationCode: ""
    };
  }

  /**
   * Close Welcome Panel
   * - Tell "Players" Panel to update its "this player";
   * - Hide Welcome Panel.
   * @argument thisPlayerName the name of the player who has this instance
   * of the web app. The string is used to udpate "this player"
   */
  closeWelcomePanel(thisPlayerName) {
    axios.get("/players").then(response => {
      var players = response.data.players;
      var otherPlayerName;

      if (players.length >= 2) {
        var playerA = players[0];
        var playerB = players[1];

        if (playerA) {
          if (playerA.name !== thisPlayerName) {
            otherPlayerName = playerA.name;
          }
        }

        if (playerB) {
          if (playerB.name !== thisPlayerName) {
            otherPlayerName = playerB.name;
          }
        }

        this.props.dispatch({
          type: UPDATE_PLAYER_NAMES_LIST,
          payload: {
            thisPlayerName: thisPlayerName,
            otherPlayerName: otherPlayerName
          }
        });
      }
    });

    // Hide the welcome panel
    this.props.dispatch({
      type: UPDATE_WELCOME_MODE,
      payload: "hidden"
    });
  }

  /**
   * Handler for onChange of invitation code's input field.
   */
  invitationCodeChanged = e => {
    this.props.dispatch({
      type: UPDATE_INVITATION_CODE,
      payload: e.target.value
    });
  };

  /**
   * Handler for onChange of password 's input field.
   */
  passwordChanged = e => {
    this.props.dispatch({
      type: UPDATE_PASSWORD,
      payload: e.target.value
    });
  };

  /**
   * Handler for onChange of player name's input field.
   */
  playerNameChanged = e => {
    this.props.dispatch({
      type: UPDATE_PLAYER_NAME,
      payload: e.target.value
    });
  };

  /**
   * Change from "join" mode to "create" mode. Called by the "Create?" button.
   */
  switchToCreateGame = () => {
    this.props.dispatch({
      type: UPDATE_WELCOME_MODE,
      payload: "create"
    });
  };

  /**
   * Change from "create" mode to "join" mode. Called by the "Create?" button.
   */
  switchToJoinGame = () => {
    this.props.dispatch({
      type: UPDATE_WELCOME_MODE,
      payload: "join"
    });
  };

  /**
   * Join a game session. Called by the "Join!" button.
   */
  joinGame = () => {
    const { playerName, invitationCode, password } = this.props;

    var joinGameQuest = {
      name: playerName,
      password: password,
      invitationCode: invitationCode
    };

    // this.recordPlayerName(playerName);

    axios.post("/join_game", joinGameQuest).then(response => {
      var data = response.data;
      if (data.success) {
        this.closeWelcomePanel(playerName);
      } else if (data.message) {
        this.props.dispatch({
          type: UPDATE_ERROR_MESSAGE,
          payload: data.message
        });
      }
    });
  };

  /**
   * Create a new game session. Called by the "Create!" button.
   */
  createGame = () => {
    const { playerName, invitationCode, password } = this.props;

    var createGameRequest = {
      name: playerName,
      password: password,
      invitationCode: invitationCode
    };

    axios.post("/create_game", createGameRequest).then(response => {
      var data = response.data;
      if (data.success) {
        this.closeWelcomePanel(playerName);
      } else if (data.message) {
        this.props.dispatch({
          type: UPDATE_ERROR_MESSAGE,
          payload: data.message
        });
      }
    });
  };

  render() {
    var pageContent = this.renderPageContent();
    const { classes } = this.props;
    return (
      <ReactCSSTransitionGroup
        transitionName={{
          enter: classes.enter,
          enterActive: classes.enterActive,
          leave: classes.leave,
          leaveActive: classes.leaveActive
        }}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {pageContent}
      </ReactCSSTransitionGroup>
    );
  }

  renderPageContent() {
    const { mode, errorMessage, connected } = this.props;

    if (!connected) return null;

    // Hidden mode, return null to get rid of the welcome panel.

    if (mode === "hidden") {
      return null;
    }

    // Actions to perform on the Welcome Panel
    // "join" mode:
    //  "Create!": create a new game;
    //  "Join?": switch to "join" mode;
    // "create" mode:
    //  "Join!": join game;
    //  "Create?": switch to "create" mode;

    var actions = <div />;

    if (mode === "create") {
      actions = (
        <div>
          <button
            className="btn btn-outline-light btn-block"
            onClick={this.createGame}
          >
            Create!
          </button>
          <button
            className="btn btn-outline-secondary btn-block"
            onClick={this.switchToJoinGame}
          >
            Join?
          </button>
        </div>
      );
    } else if (mode === "join") {
      actions = (
        <div>
          <button
            className="btn btn-outline-light btn-block"
            onClick={this.joinGame}
          >
            Join Game!
          </button>
          <button
            className="btn btn-outline-secondary btn-block"
            onClick={this.switchToCreateGame}
          >
            Create?
          </button>
        </div>
      );
    }

    // Display the error message, if there is one.

    var error = null;
    if (errorMessage) {
      error = (
        <div className="row mt-2">
          <div className="col">
            <div className="alert alert-danger">{errorMessage}</div>
          </div>
        </div>
      );
    }

    return (
      <div className="card bg-dark text-white" key={0}>
        <div className="card-header">
          <h5>Welcome</h5>
        </div>
        <div className="card-body">
          <div className="container">
            {/* Error message */}

            {error}

            {/* User name*/}

            <div className="row mt-2">
              <div className="col">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    onChange={this.playerNameChanged}
                    value={this.props.playerName}
                  />
                </div>
              </div>
            </div>

            {/* Password */}

            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>Password</label>
                  <Password
                    className="form-control"
                    placeholder="Password"
                    onChange={this.passwordChanged}
                    value={this.props.password}
                  />
                </div>
              </div>
            </div>

            {/* Invitation Code */}

            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>Invitation Code</label>
                  <Password
                    className="form-control"
                    placeholder="Invitation Code"
                    onChange={this.invitationCodeChanged}
                    value={this.props.invitationCode}
                  />
                </div>
              </div>
            </div>

            {/* Actions */}

            <div className="row mb-2">
              <div className="col">{actions}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withStyles(style)(WelcomePanel));
