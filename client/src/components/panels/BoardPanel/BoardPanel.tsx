import * as React from 'react';

import "./Board.css";

import Square from './Square';

class Board extends React.Component {
  public render() {
    return (
      <table className="board">
        <tbody>
          <tr>
            <td>
              <Square player="me" />
            </td>
            <td>
              <Square player="enemy" />
            </td>
            <td>
              <Square />
            </td>
          </tr>
          <tr>
            <td>
              <Square />
            </td>
            <td>
              <Square />
            </td>
            <td>
              <Square />
            </td>
          </tr>
          <tr>
            <td>
              <Square />
            </td>
            <td>
              <Square />
            </td>
            <td>
              <Square />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Board;