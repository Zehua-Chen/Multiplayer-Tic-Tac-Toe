import { ITotalState } from "../../../states";

interface IDisconnectedPanelProps {
  connected: boolean;
}

function mapStateToProps(
  state: ITotalState,
  ownProps: {}
): IDisconnectedPanelProps {
  return { connected: state.gameInfo.connected };
}

export default mapStateToProps;
