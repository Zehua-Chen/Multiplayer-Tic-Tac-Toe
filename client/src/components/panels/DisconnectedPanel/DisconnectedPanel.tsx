import React from 'react';
import { connect } from 'react-redux';
import { ITotalState } from '../../../states';

interface IDisconnectedPanelProps {
  connected: boolean;
}

class DisconnectedPanel extends React.Component<IDisconnectedPanelProps> {
  render() {
    
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