import React from 'react';

export interface IGameInfoProps {
  /**
   * If the content should be centering.
   * Changing this props does not trigger render.
   */
  centering?: boolean;
  
  /**
   * Web app location on local network.
   */
  localNetworkAddress: string;
  
  /**
   * Amount of people watching.
   */
  peopleWatching: number;
}

/**
 * Game info displays the address at which the web app is hosted, and 
 * the amount of people watching the game.
 */
class GameInfo extends React.Component<IGameInfoProps> {
  
  shouldComponentUpdate(nextProps: IGameInfoProps, nextState: any) {
    if (nextProps.localNetworkAddress != this.props.localNetworkAddress
        || nextProps.peopleWatching != this.props.peopleWatching) {
      return true;
    }
    
    return false;
  }
  
  
  render() {
    
    const { localNetworkAddress, peopleWatching } = this.props;
    
    // Centering

    if (this.props.centering) {
      return (
        <div className="text-center bg-secondary text-white rounded">
          <div>
            <label className="mt-1">{localNetworkAddress}</label>
          </div>
          <div>
            <label>{peopleWatching} Watching</label>
          </div>
        </div>
      );
    }
    
    // Not centering

    return (
      <div className="bg-secondary text-white rounded">
        <div className="ml-3">
          <label className="mt-1">{localNetworkAddress}</label>
        </div>
        <div className="ml-3">
          <label>{peopleWatching} Watching</label>
        </div>
      </div>
    );
  }
}

export default GameInfo;