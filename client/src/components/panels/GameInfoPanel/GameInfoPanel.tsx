import React from 'react';

import { connect } from 'react-redux';

import ProgressBar from '../../ui-components/ProgressBar';

import { ITotalState } from '../../../states';

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
  /**
   * Whether the client is connected to the server.
   */
  connected: boolean;
}

/**
 * Game info displays the address at which the web app is hosted, and 
 * the amount of people watching the game.
 */
class GameInfoPanel extends React.Component<IGameInfoProps> {
  
  render() {

    const { hostUrl, viewers, progress, connected } = this.props;

    if (connected === true) {
      // If connected, render usual card
      return (
        <div className="card">

          <div className="card-header">
            <h5>Game Info</h5>
          </div>

          <ul className="list-group list-group-flush">

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
      
    } else {
      // Render a card with danger background when the client has lost connection
      return (
        <div className="card bg-danger text-white">
          <div className="card-body">
            <h5 className="card-title">Disconnected</h5>
            <p>You are disconnected from the server. Your moves are blocked.</p>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state: ITotalState, ownProps: {}): IGameInfoProps {
  const { progress, hostUrl, viewers, connected } = state.gameInfo;
  return { progress: progress, hostUrl: hostUrl, viewers: viewers, connected: connected }
}

export default connect(mapStateToProps)(GameInfoPanel);