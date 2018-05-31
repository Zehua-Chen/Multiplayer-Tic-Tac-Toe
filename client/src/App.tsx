import * as React from 'react';

// import logo from './logo.svg';

import { GameInfoPanel, BoardPanel, ScorePanel } from './components/panels';

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
            <BoardPanel />
          </div>
          
          {/* ScorePanel */}

          <div className="col-md-4">
            <div>
              <GameInfoPanel localNetworkAddress="http:xxx.xxxx.xxxx.xxx:xxxx/" peopleWatching={0} />
            </div>
            
            <div className="mt-2">
              <ScorePanel />
            </div>
            
          </div>

        </div>
      </div>
    );
  }
}

export default App;
