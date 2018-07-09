import React from 'react';
import { connect } from 'react-redux';

import PlayerList from './PlayersList';
import PlayerListItem from './PlayersListItem';
import { ITotalState } from '../../../states';

interface IPlayersPanelProps {
  firstPlayerName?: string;
  secondPlayerName?: string;
  movingPlayerName?: string;
}

class PlayersPanel extends React.Component<IPlayersPanelProps> {
  render() {
    
    const { 
      firstPlayerName, secondPlayerName, movingPlayerName
    } = this.props;
    
    // Determine what to show with the player list items
    
    var firstPlayer = <PlayerListItem />
    var secondPlayer = <PlayerListItem />
    
    if (firstPlayerName) {
      if (firstPlayerName == movingPlayerName) {
        firstPlayer = <PlayerListItem playerName={firstPlayerName} moving/>
      } else {
        firstPlayer = <PlayerListItem playerName={firstPlayerName}/>
      }
    }
    
    if (secondPlayerName) {
      if (secondPlayerName == movingPlayerName) {
        secondPlayer = <PlayerListItem playerName={secondPlayerName} moving hostile/>
      } else {
        secondPlayer = <PlayerListItem playerName={secondPlayerName} hostile/>
      }
    }
    
    return (

      <div className="card">

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

function mapStateToProps(state: ITotalState, ownProps: {}): IPlayersPanelProps {
  const { thisPlayerName, otherPlayerName, movingPlayerName } = state.players;
  
  return {
    firstPlayerName: thisPlayerName,
    secondPlayerName: otherPlayerName,
    movingPlayerName: movingPlayerName
  }
}

export default connect(mapStateToProps)(PlayersPanel);