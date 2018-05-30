import * as React from 'react';

// import logo from './logo.svg';

import GameInfo from './components/GameInfo';
import ProgressBar from './components/ProgressBar';

import Board from './components/Board';
import ScorePanel from './components/ScorePanel';

class App extends React.Component {
  public render() {
    return (
      <div className="container">

        <div className="row mt-3">
        
          {/* Game Title */}
        
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
        
        {/* Game Progress */}

        <div className="row mt-3">
          <div className="col">
            <ProgressBar value={20} />
          </div>
        </div>
        
        {/* Main Content */}

        <div className="row mt-3">
        
          {/* Board */}

          <div className="col-md-8">
            <Board />
          </div>
          
          {/* ScorePanel */}

          <div className="col-md-4">
            <ScorePanel />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
