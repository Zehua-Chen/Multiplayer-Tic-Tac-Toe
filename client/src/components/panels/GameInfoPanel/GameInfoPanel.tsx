import React from "react";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import * as styles from "./GameInfoPanel.css";

import ProgressBar from "../../ui-components/ProgressBar";

import { ITotalState } from "../../../states";

export interface IGameInfoProps {
  /**
   * Web app location on local network.
   */
  hostUrl: string;
  /**
   * Amount of people watching.
   */
  viewers: number;
  /**
   * Progress of the game, out of 100.
   */
  progress: number;

  winner?: string;

  connected: boolean;
}

/**
 * Game info displays the address at which the web app is hosted, and
 * the amount of people watching the game.
 */
class GameInfoPanel extends React.Component<IGameInfoProps> {
  render() {
    var pageContent = this.renderPageContent();
    return (
      <ReactCSSTransitionGroup
        transitionName={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          leave: styles.leave,
          leaveActive: styles.leaveActive
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

function mapStateToProps(state: ITotalState, ownProps: {}): IGameInfoProps {
  const { progress, hostUrl, viewers, winner, connected } = state.gameInfo;

  return {
    progress: progress,
    hostUrl: hostUrl,
    viewers: viewers,
    winner: winner,
    connected: connected
  };
}

export default connect(mapStateToProps)(GameInfoPanel);
