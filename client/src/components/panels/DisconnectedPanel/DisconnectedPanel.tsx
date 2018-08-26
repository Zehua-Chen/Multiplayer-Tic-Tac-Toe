import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import * as styles from './DisconnetedPanel.css';

import { ITotalState } from '../../../states';

interface IDisconnectedPanelProps {
  connected: boolean;
}

class DisconnectedPanel extends React.Component<IDisconnectedPanelProps> {
  
  render() {
    var pageContent = this.renderPageContent();
    return (
      <ReactCSSTransitionGroup 
        transitionName={{ 
          enter: styles.enter, enterActive: styles.enterActive,
          leave: styles.leave, leaveActive: styles.leaveActive
        }}
        transitionEnterTimeout={300} transitionLeaveTimeout={1}>
        {pageContent}
      </ReactCSSTransitionGroup>
    );
  }
  
  renderPageContent() {
    
    if (this.props.connected) return null;
    
    return (
      <div key={4} className="mt-3 card bg-danger text-white">
        <div className="card-body">
          <h5 className="card-title">Disconnected</h5>
          <p>You are disconnected from the server. Your moves are blocked.</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: ITotalState, ownProps: {}): IDisconnectedPanelProps {
  return { connected: state.gameInfo.connected };
}

export default connect(mapStateToProps)(DisconnectedPanel);