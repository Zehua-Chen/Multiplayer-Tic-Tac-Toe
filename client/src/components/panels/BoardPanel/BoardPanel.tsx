import * as React from 'react';
import { connect } from 'react-redux';

import Square from './Square';
import { ITotalState } from '../../../states';
import socket from '../../../network';

import * as styles from './BoardPanel.css';

interface IBoardProps {
  board: string[][];
  invitationCode: string;
  thisPlayerName?: string;
  otherPlayerName?: string;
}

class BoardPanel extends React.Component<IBoardProps> {
  
  clicked(y: number, x: number) {
    
    if (this.props.thisPlayerName) {
      var moveRequest: TicTacToe.IMoveRequest = {
        name: this.props.thisPlayerName,
        invitationCode: this.props.invitationCode,
        location: { y: y, x: x }
      };
      
      socket.emit("move", moveRequest);
    }
  }
  
  public render() {
    
    const { 
      board, thisPlayerName, otherPlayerName
    } = this.props;
    
    // console.log(`This player = ${thisPlayerName}`);
    // console.log(`Other player = ${otherPlayerName}`);
    
    // Generate rows / board contents
    var boardContent = board.map((row, y, array) => {
      
      // Generate row contents
      var rowButtons = row.map((cell, x, array) => {
        
        var square = null;
        var onClickHandler = this.clicked.bind(this, y, x);
        
        // Find the right configuration of Square to be wrapped
        // inside "td" element
        if (cell == "?") {
          square = <Square onClick={onClickHandler}/>;
        } else if (thisPlayerName && cell == thisPlayerName) {
          square = <Square player="this"/>;
        } else if (otherPlayerName && cell == otherPlayerName) {
          square = <Square player="other"/>;
        }
        
        return (
          <td key={`${y},${x}`}>
            {square}
          </td>
        );
      });
      
      return (
        <tr key={y}>
          {rowButtons}
        </tr>
      );
    });
    
    return (
      <table className={styles.board}>
        <tbody>
          {boardContent}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state: ITotalState, ownProps: {}): IBoardProps {
  return { 
    board: state.board.board,
    thisPlayerName: state.players.thisPlayerName,
    otherPlayerName: state.players.otherPlayerName,
    invitationCode: state.welcome.invitationCode
  }
}

export default connect(mapStateToProps)(BoardPanel);