import React from 'react';
import { Link } from 'react-router-dom';

import { 
  GameInfoPanel, 
  BoardPanel, 
  PlayersPanel, 
  WelcomePanel, 
  DisconnectedPanel 
} from '../../panels';
import { WebSocketListener } from '../../blank-components';

import * as styles from './MainPage.css';

class MainPage extends React.Component {
  render() {

    return (
      <div>
        
        <WebSocketListener />

        <div className={`container-fluid ${styles.fullHeight}`}>

          {/* Main Content */}

          <div className={`row ${styles.fullHeight}`}>

            {/* Board */}

            <div className="col-md-8 mt-3 mb-3 text-center align-self-center">
              <BoardPanel />
            </div>

            {/* ScorePanel */}

            <div className={`col-md-4 ${styles.sidebar}`}>
            
              <div className="mt-3">
                <DisconnectedPanel />
              </div>
            
              <div className="mt-2">
                <WelcomePanel />
              </div>
              <div className="mt-2">
                <GameInfoPanel />
              </div>
              <div className="mt-2 mb-3">
                <PlayersPanel />
              </div>

              {/* Navigation Link to About Page */}

              <div className="mt-3 mb-3 card">
                <div className="card-header">
                  <h5>About</h5>
                </div>
                <div className="card-body">
                  <Link className="btn btn-outline-dark" to="/about">Visit About Page</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;