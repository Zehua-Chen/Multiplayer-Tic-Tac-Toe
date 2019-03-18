import { ITotalState } from "../../../states";

interface IBoardProps {
  board: string[][];
  invitationCode: string;
  password: string;
  thisPlayerName?: string;
  otherPlayerName?: string;
}

function mapStateToProps(state: ITotalState, ownProps: {}): IBoardProps {
  return {
    board: state.board.board,
    thisPlayerName: state.players.thisPlayerName,
    otherPlayerName: state.players.otherPlayerName,
    invitationCode: state.welcome.invitationCode,
    password: state.welcome.password
  };
}

export default mapStateToProps;
