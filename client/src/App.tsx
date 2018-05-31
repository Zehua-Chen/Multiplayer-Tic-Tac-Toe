import * as React from 'react';

// import logo from './logo.svg';
import './App.css';

import { GameInfoPanel, BoardPanel, ScorePanel, NewGamePanel } from './components/panels';

class App extends React.Component {
  public render() {
    return (
      <div className="container-fluid fullheight">
        
        {/* Main Content */}

        <div className="row fullheight">
        
          {/* Board */}

          <div className="col-md-8 mt-3">
            <BoardPanel />
          </div>
          
          {/* ScorePanel */}

          <div className="col-md-4 sidebar">
            
            <div className="mt-3">
              <NewGamePanel />
            </div>
          
            <div className="mt-2">
              <GameInfoPanel localNetworkAddress="http:xxx.xxxx.xxxx.xxx:xxxx/" peopleWatching={0} />
            </div>
            
            <div className="mt-2 mb-3">
              <ScorePanel />
            </div> 
            
          </div>

        </div>
      </div>
    );
  }
}

export default App;
