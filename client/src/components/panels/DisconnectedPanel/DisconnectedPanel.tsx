import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import * as animation from '../SidePanel.animate.css';

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
          enter: animation.sidePanelEnter, enterActive: animation.sidePanelEnterActive,
          leave: animation.sidePanelLeave, leaveActive: animation.sidePanelLeaveActive
        }}
        transitionEnterTimeout={0} transitionLeaveTimeout={0}>
        {pageContent}
      </ReactCSSTransitionGroup>
    );
  }
  
  renderPageContent() {
    
    if (this.props.connected) return null;
    
    return (
      <div className="mt-3 card bg-danger text-white">
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