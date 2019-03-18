import React from "react";
import withStyles from "react-jss";

const style = {
  noMargin: {
    margin: 0
  }
};

/**
 * Used with PlayersList
 *
 * Display information regarding a player.
 */
class PlayersListItem extends React.Component {
  static defaultProps = {
    hostile: false,
    moving: false
  };

  render() {
    const { hostile, moving, playerName, classes } = this.props;

    if (playerName) {
      var color = "bg-primary";

      if (hostile) {
        color = "bg-danger";
      }

      var content = <span>{playerName}</span>;

      if (moving) {
        // Container with one row, which has one column used for
        // player names, and another used for player's moving status.
        content = (
          <div className="row">
            <div className="col">{playerName}</div>
            <div className="col text-right">
              <h5 className={classes.noMargin}>
                <span className="badge badge-dark">Moving</span>
              </h5>
            </div>
          </div>
        );
      }

      return (
        <li className={`list-group-item container-fluid ${color} text-white`}>
          {content}
        </li>
      );
    }

    return <li className="list-group-item">Empty</li>;
  }
}

export default withStyles(style)(PlayersListItem);
