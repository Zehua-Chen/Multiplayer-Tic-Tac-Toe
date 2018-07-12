import React from 'react';
import injectSheet, { WithClasses } from 'react-jss';

const style = {
  noMargin: {
    margin: 0
  }
}

type ClassKeys = "noMargin";

/**
 * Props for PlayersListItem
 */
interface IPlayersListItemProps {
  /**
   * Name of the player. If undefined, PlayerListItem will display "Empty"
   * 
   * Default is "undefined"
   */
  playerName?: string;
  
  /**
   * If the player is hostile to the player playing on THIS instance of the 
   * client. If hostile, the list item is red, otherwise, blue.
   * 
   * Default is "false"
   */
  hostile?: boolean;
  
  /**
   * If the player is making a move. If moving, there will be a dark badge on
   * the left of the list item.
   * 
   * Default is "false"
   */
  moving?: boolean;
}

/**
 * Used with PlayersList
 * 
 * Display information regarding a player.
 */
class PlayersListItem extends React.Component<IPlayersListItemProps & WithClasses<ClassKeys>> {
  
  public static defaultProps: IPlayersListItemProps = {
    hostile: false,
    moving: false,
  }

  render() {

    const { hostile, moving, playerName, classes } = this.props;
    
    if (playerName) {
      var color = "bg-primary";
    
      if (hostile) {
        color = "bg-danger"
      }
      
      var content = (
        <span>{playerName}</span>
      );
      
      if (moving) {
        // Container with one row, which has one column used for 
        // player names, and another used for player's moving status.
        content = (
          <div className="row">
            <div className="col">
              {playerName}
            </div>
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
    
    return (
      <li className="list-group-item">
        Empty
      </li>
    );
    

  }
}

export default injectSheet(style)<IPlayersListItemProps, ClassKeys>(PlayersListItem);