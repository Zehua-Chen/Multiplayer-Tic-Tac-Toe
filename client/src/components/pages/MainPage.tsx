import React from 'react';

import './MainPage.css';

import { GameInfoPanel, BoardPanel, ScorePanel, WelcomePanel } from '../panels';
// import { WebSocketListener } from './components/blank-components';

class MainPage extends React.Component {
  render() {
    return (
      <div>

        <div>
          {/* <WebSocketListener /> */}
        </div>

        <div className="container-fluid fullheight">

          {/* Main Content */}

          <div className="row fullheight">

            {/* Board */}

            <div className="col-md-8 mt-3 mb-3 text-center align-self-center">
              <BoardPanel />
            </div>

            {/* ScorePanel */}

            <div className="col-md-4 sidebar">

              <div className="mt-3">
                <WelcomePanel />
              </div>
              <div className="mt-2">
                <GameInfoPanel />
              </div>
              <div className="mt-2 mb-3">
                <ScorePanel />
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;