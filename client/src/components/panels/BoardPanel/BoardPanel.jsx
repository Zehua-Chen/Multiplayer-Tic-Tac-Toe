import * as React from "react";
import { connect } from "react-redux";
import withStyles from "react-jss";
import * as TicTacToe from "interfaces";
import Square from "./Square";
import socket from "../../../network";
import mapStateToProps from "./mapStateToProps";

const style = {
  board: {
    margin: "auto"
  }
};

class BoardPanel extends React.Component {
  /**
   * Click button
   * @param {number} y
   * @param {number} x
   */
  clicked(y, x) {
    if (this.props.thisPlayerName) {
      var moveRequest = {
        name: this.props.thisPlayerName,
        password: this.props.password,
        invitationCode: this.props.invitationCode,
        location: { y: y, x: x }
      };

      socket.emit("move", moveRequest);
    }
  }

  render() {
    const { board, thisPlayerName, otherPlayerName, classes } = this.props;

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
          square = <Square onClick={onClickHandler} />;
        } else if (thisPlayerName && cell == thisPlayerName) {
          square = <Square player="this" />;
        } else if (otherPlayerName && cell == otherPlayerName) {
          square = <Square player="other" />;
        }

        return <td key={`${y},${x}`}>{square}</td>;
      });

      return <tr key={y}>{rowButtons}</tr>;
    });

    return (
      <table className={classes.board}>
        <tbody>{boardContent}</tbody>
      </table>
    );
  }
}

export default connect(mapStateToProps)(withStyles(style)(BoardPanel));
