import React from 'react';

import ProgressBar from '../../ui-components/ProgressBar';

export interface IGameInfoProps {
  /**
   * Web app location on local network.
   */
  localNetworkAddress: string;

  /**
   * Amount of people watching.
   */
  peopleWatching: number;
}

/**
 * Game info displays the address at which the web app is hosted, and 
 * the amount of people watching the game.
 */
class GameInfo extends React.Component<IGameInfoProps> {

  shouldComponentUpdate(nextProps: IGameInfoProps, nextState: any) {
    if (nextProps.localNetworkAddress != this.props.localNetworkAddress
      || nextProps.peopleWatching != this.props.peopleWatching) {
      return true;
    }

    return false;
  }


  render() {

    const { localNetworkAddress, peopleWatching } = this.props;

    // Not centering

    return (
      <div className="card">

        <div className="card-header">
          <h5>Status</h5>
        </div>

        <ul className="list-group list-group-flush">

          <li className="list-group-item">
            <p>{localNetworkAddress}</p>
          </li>

          <li className="list-group-item">
            <p>{peopleWatching} Watching</p>
          </li>

          <li className="list-group-item">
            <label>Progress</label>
            <ProgressBar value={20} />
          </li>
        </ul>
      </div>
    );
  }
}

export default GameInfo;