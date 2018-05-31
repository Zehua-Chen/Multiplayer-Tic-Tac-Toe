import * as React from 'react';

// import logo from './logo.svg';

import GameInfo from './components/GameInfo';

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
          
        </div>
        
        {/* Main Content */}

        <div className="row mt-3">
        
          {/* Board */}

          <div className="col-md-8">
            <Board />
          </div>
          
          {/* ScorePanel */}

          <div className="col-md-4">
            <GameInfo localNetworkAddress="http:xxx.xxxx.xxxx.xxx:xxxx/" peopleWatching={0} />
            <ScorePanel />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
