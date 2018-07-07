import React from 'react';

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

class PlayersListItem extends React.Component<IPlayersListItemProps> {
  
  public static defaultProps: IPlayersListItemProps = {
    hostile: false,
    moving: false,
  }

  render() {

    const { hostile, moving, playerName } = this.props;
    
    if (playerName) {
      var color = "bg-primary";
    
      if (hostile) {
        color = "bg-danger"
      }
      
      var content = (
        <span>{playerName}</span>
      );
      
      if (moving) {
        content = (
          <div className="row">
            <div className="col">
              {playerName}
            </div>
            <div className="col text-right">
              <h5>
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

export default PlayersListItem;