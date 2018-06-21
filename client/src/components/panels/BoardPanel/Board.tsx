import * as React from 'react';
import injectSheet, { WithClasses } from 'react-jss';

import Square from './Square';

const style = {
  board: {
    margin: "auto",
  }
};
type ClassKeys = "board";

class Board extends React.Component<WithClasses<ClassKeys>> {
  public render() {
    const { classes } = this.props;
    return (
      <table className={classes.board}>
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

export default injectSheet(style)<{}, ClassKeys>(Board);