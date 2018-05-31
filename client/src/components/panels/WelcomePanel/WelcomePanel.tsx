import React from 'react';

class WelcomePanel extends React.Component {
  public render() {
    return (
      <div className="card">
        <div className="card-header">
          <h5>Welcome</h5>
        </div>
        <div className="card-body">
          <button className="btn btn-primary btn-block">Create New Game</button>
        </div>
        
      </div>
    );
  }
}

export default WelcomePanel;