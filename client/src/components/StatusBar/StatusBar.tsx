import React from 'react';

import GameInfo from './GameInfo';
import ProgressBar from './ProgressBar';

/**
 * Status bar is at the top section of the game, it displays
 * current status of the game
 */
class StatusBar extends React.Component {
  
  constructor(props: any) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <div className="row mt-3">
        
          {/* Title of the game */}
          
          <div className="col-4 d-none d-md-block">
            <h1>Tic Tac Toe</h1>
          </div>
          
          {/* Game Info */}
          
          {/* Hidden on sm */}
          <div className="col d-none d-sm-block">
            <GameInfo localNetworkAddress="http:xxx.xxxx.xxxx.xxx:xxxx/" peopleWatching={0} />
          </div>
          
          {/* Visible on sm */}
          <div className="col d-block d-sm-none">
            <GameInfo centering localNetworkAddress="http:xxx.xxxx.xxxx.xxx:xxxx/" peopleWatching={0} />
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="row mt-2">
          <div className="col">
            <ProgressBar value={0}/>
          </div>
        </div>
      </div>
    );
  }
}

export default StatusBar;