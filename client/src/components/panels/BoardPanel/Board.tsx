import * as React from 'react';
import injectSheet, { WithClasses } from 'react-jss';
import { connect } from 'react-redux';

import Square from './Square';
import { ITotalState } from '../../../states';

const style = {
  board: {
    margin: "auto",
  }
};

type ClassKeys = "board";

interface IBoardProps {
  board: string[][];
}

class Board extends React.Component<WithClasses<ClassKeys> & IBoardProps> {
  
  clicked(y: number, x: number) {
    console.log(`Square clicked at (${y}, ${x})`);
  }
  
  public render() {
    
    const { classes, board } = this.props;
    
    console.log(board);
    
    // Generate rows / board contents
    var boardContent = board.map((row, y, array) => {
      
      // Generate row contents
      var rowButtons = row.map((cell, x, array) => {
        
        var square = null;
        var onClickHandler = this.clicked.bind(this, y, x);
        
        // Find the right configuration of Square to be wrapped
        // inside "td" element
        if (cell == "") {
          square = <Square onClick={onClickHandler}/>
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
      <table className={classes.board}>
        <tbody>
          {boardContent}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state: ITotalState, ownProps: {}): IBoardProps {
  return { board: state.board.board }
}

var injected = injectSheet(style)<{}, ClassKeys>(Board);

export default connect(mapStateToProps)(injected);