import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import injectSheet, { WithClasses } from 'react-jss';

import { GameInfoPanel, BoardPanel, PlayersPanel, WelcomePanel } from '../panels';
import { ITotalState } from '../../states';
// import { WebSocketListener } from '../blank-components';

const style = {
  
  fullheight: {
    height: "100vh",
  },
  
  sidebar: {
    height: "100vh",
    overflow: "scroll",
  },
    
  "@media (max-width: 768px)": {
    
    fullheight: {
      height: "auto",
    },
    
    sidebar: {
      height: "auto",
      overflow: "initial",
    }
  }
};

type ClassKeys = "fullheight" | "sidebar";

export interface IMainPageProps {
  connected: boolean;
}

class MainPage extends React.Component<IMainPageProps & WithClasses<ClassKeys>> {
  render() {
    
    const { classes } = this.props;

    var connectedSidePanels = (
      <div>
        <div className="mt-3">
          <WelcomePanel />
        </div>
        <div className="mt-2">
          <GameInfoPanel />
        </div>
        <div className="mt-2 mb-3">
          <PlayersPanel />
        </div>
      </div>
    );

    var disconnectedSidePanel = (
      <div className="mt-3 card bg-danger text-white">
        <div className="card-body">
          <h5 className="card-title">Disconnected</h5>
          <p>You are disconnected from the server. Your moves are blocked.</p>
        </div>
      </div>
    );

    return (
      <div>

        <div>
          {/* <WebSocketListener /> */}
        </div>

        <div className={`container-fluid ${classes.fullheight}`}>

          {/* Main Content */}

          <div className={`row ${classes.fullheight}`}>

            {/* Board */}

            <div className="col-md-8 mt-3 mb-3 text-center align-self-center">
              <BoardPanel />
            </div>

            {/* ScorePanel */}

            <div className={`col-md-4 ${classes.sidebar}`}>
              {this.props.connected ? connectedSidePanels : disconnectedSidePanel}
              
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

function mapStateToProps(state: ITotalState, ownProps: {}): IMainPageProps {
  return { connected: state.gameInfo.connected };
}

var injected = injectSheet(style)<IMainPageProps, ClassKeys>(MainPage);
var connected = connect(mapStateToProps)(injected)

export default connected;