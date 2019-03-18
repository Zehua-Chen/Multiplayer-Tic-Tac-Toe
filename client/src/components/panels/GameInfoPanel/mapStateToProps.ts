import { ITotalState } from "../../../states";

interface IGameInfoProps {
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

export default mapStateToProps;
