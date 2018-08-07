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
  
  winner?: string;
  
  connected: boolean;
}

/**
 * Game info displays the address at which the web app is hosted, and
 * the amount of people watching the game.
 */
class GameInfoPanel extends React.Component<IGameInfoProps> {

  render() {

    const { hostUrl, viewers, progress, winner, connected } = this.props;
    
    if (!connected) return null;
    
    var winnerItem = null;
    
    if (winner) {
      winnerItem = (
        <li className="list-group-item">
          { winner } wins!
        </li>
      );
    }

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
          
          {winnerItem}
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
