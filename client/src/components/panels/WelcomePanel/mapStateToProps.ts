import { ITotalState } from "../../../states";

/**
 * Props used with connect(mapStateToProps)(Component)
 * to pass information from redux-managed state to the component.
 *
 * THIS PROP IS NOT AVAILABLE IN OTHER COMPONENTS
 */
interface IWelcomePanelProps {
  mode: "create" | "join" | "hidden";
  errorMessage?: string;

  playerName: string;
  invitationCode: string;
  password: string;

  connected: boolean;
}

/**
 * Map state managed by redux to props
 * @param state the total state managed by redux
 * @param ownProps the props exposed to other components.
 */
function mapStateToProps(state: ITotalState, ownProps: {}): IWelcomePanelProps {
  const {
    mode,
    errorMessage,
    playerName,
    invitationCode,
    password
  } = state.welcome;
  return {
    mode: mode,
    errorMessage: errorMessage,
    playerName: playerName,
    invitationCode: invitationCode,
    password: password,
    connected: state.gameInfo.connected
  };
}

export default mapStateToProps;
