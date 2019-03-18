import { ITotalState } from "../../../states";

interface IPlayersPanelProps {
  firstPlayerName?: string;
  secondPlayerName?: string;
  movingPlayerName?: string;
  connected: boolean;
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
    movingPlayerName: movingPlayerName,
    connected: state.gameInfo.connected
  };
}

export default mapStateToProps;
