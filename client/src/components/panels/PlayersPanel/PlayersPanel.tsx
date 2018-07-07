import React from 'react';

import PlayerList from './PlayersList';
import PlayerListItem from './PlayersListItem';

class ScorePanel extends React.Component {
  render() {
    return (

      <div className="card">

        <div className="card-header">
          <h5>Players</h5>
        </div>

        <PlayerList>
          <PlayerListItem hostile/>
          <PlayerListItem />
        </PlayerList>

      </div>
    );
  }
}

export default ScorePanel;