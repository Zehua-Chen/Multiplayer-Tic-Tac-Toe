import * as React from 'react';

class Board extends React.Component {
  public render() {
    return (
      <table className="text-center">
        <tbody>
          <tr>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Board;