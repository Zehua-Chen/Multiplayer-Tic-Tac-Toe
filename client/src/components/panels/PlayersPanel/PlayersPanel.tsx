import React from 'react';
import { connect } from 'react-redux';

import PlayerList from './PlayersList';
import PlayerListItem from './PlayersListItem';
import { ITotalState } from '../../../states';

/**
 * Props used with connect(mapStateToProps)(Component)
 * to pass information from redux-managed state to the component.
 * 
 * THIS PROP IS NOT AVAILABLE IN OTHER COMPONENTS
 */
interface IPlayersPanelProps {
  firstPlayerName?: string;
  secondPlayerName?: string;
  movingPlayerName?: string;
}

/**
 * Panel that display the following information about the two players
 * - name
 * - faction
 * - if the player is moving.
 */
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

/**
 * Function that transfer information from the state managed by redux to 
 * PlayersPanel component
 * @param state the total state managed by redux
 * @param ownProps props available to other components
 * @return information that PlayersPanel need.
 */
function mapStateToProps(state: ITotalState, ownProps: {}): IPlayersPanelProps {
  const { thisPlayerName, otherPlayerName, movingPlayerName } = state.players;
  
  // console.log(state.players);
  
  return {
    firstPlayerName: thisPlayerName,
    secondPlayerName: otherPlayerName,
    movingPlayerName: movingPlayerName
  }
}

export default connect(mapStateToProps)(PlayersPanel);