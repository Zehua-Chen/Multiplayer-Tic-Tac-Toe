import React from "react";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import withStyles from "react-jss";

import PlayerList from "./PlayersList";
import PlayerListItem from "./PlayersListItem";
import mapStateToProps from "./mapStateToProps";

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
    transition: "0ms ease-in-out"
  }
};

/**
 * Panel that display the following information about the two players
 * - name
 * - faction
 * - if the player is moving.
 */
class PlayersPanel extends React.Component {
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
        transitionLeaveTimeout={1}
      >
        {pageContent}
      </ReactCSSTransitionGroup>
    );
  }

  renderPageContent() {
    const {
      firstPlayerName,
      secondPlayerName,
      movingPlayerName,
      connected
    } = this.props;

    if (!connected) return null;

    // Determine what to show with the player list items

    var firstPlayer = <PlayerListItem />;
    var secondPlayer = <PlayerListItem />;

    if (firstPlayerName) {
      if (firstPlayerName === movingPlayerName) {
        firstPlayer = <PlayerListItem playerName={firstPlayerName} moving />;
      } else {
        firstPlayer = <PlayerListItem playerName={firstPlayerName} />;
      }
    }

    if (secondPlayerName) {
      if (secondPlayerName === movingPlayerName) {
        secondPlayer = (
          <PlayerListItem playerName={secondPlayerName} moving hostile />
        );
      } else {
        secondPlayer = <PlayerListItem playerName={secondPlayerName} hostile />;
      }
    }

    return (
      <div className="card" key={2}>
        <div className="card-header">
          <h5>Players</h5>
        </div>

        <PlayerList>
          {firstPlayer}
          {secondPlayer}
        </PlayerList>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withStyles(style)(PlayersPanel));
