import * as React from 'react';

// import logo from './logo.svg';

import StatusBar from './components/StatusBar';

import Board from './components/Board';
import ScorePanel from './components/ScorePanel';

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <StatusBar />
        
        <div className="row mt-3">
          <Board />
          <ScorePanel />
        </div>
      </div>
    );
  }
}

export default App;
