import React from 'react';

interface IPlayersListItemProps {
  hostile?: boolean;
}

class PlayersListItem extends React.Component<IPlayersListItemProps> {
  
  public static defaultProps: IPlayersListItemProps = {
    hostile: false
  }

  render() {

    const { hostile } = this.props;
    
    var color = "";
    
    if (hostile) {
      color = "bg-danger text-white"
    }

    return (
      <li className={`list-group-item ${color}`}>
        Player
      </li>
    );
  }
}

export default PlayersListItem;