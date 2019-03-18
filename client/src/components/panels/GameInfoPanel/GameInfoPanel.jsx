import React from "react";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import withStyles from "react-jss";
import ProgressBar from "../../ui-components/ProgressBar";
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
 * Game info displays the address at which the web app is hosted, and
 * the amount of people watching the game.
 */
class GameInfoPanel extends React.Component {
  render() {
    var pageContent = this.renderPageContent();
    const { classes } = this.props;
    return (
      <ReactCSSTransitionGroup
        transitionName={{
          enter: classes.enter,
          enterActive: `${classes.enter} ${classes.enterActive}`,
          leave: classes.leave,
          leaveActive: `${classes.leave} ${classes.leaveActive}`
        }}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={1}
      >
        {pageContent}
      </ReactCSSTransitionGroup>
    );
  }

  renderPageContent() {
    const { hostUrl, viewers, progress, winner, connected } = this.props;

    if (!connected) return null;

    var winnerItem = null;

    if (winner) {
      winnerItem = (
        <li className="list-group-item bg-success text-white">
          {winner} wins!
        </li>
      );
    }

    return (
      <div className="card" key={3}>
        <div className="card-header">
          <h5>Game Info</h5>
        </div>

        <ul className="list-group list-group-flush">
          {winnerItem}

          <li className="list-group-item">
            Game hosted at <a href={hostUrl}>{hostUrl}</a>
          </li>

          <li className="list-group-item">
            <p>{viewers} Watching</p>
          </li>

          <li className="list-group-item">
            <label>Progress</label>
            <ProgressBar value={progress} />
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withStyles(style)(GameInfoPanel));
