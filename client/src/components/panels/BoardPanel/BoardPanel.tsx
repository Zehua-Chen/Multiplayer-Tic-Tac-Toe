import * as React from 'react';

import "./Board.css";

import Square from './Square';

class Board extends React.Component {
  public render() {
    return (
      <div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    );
  }
}

export default Board;