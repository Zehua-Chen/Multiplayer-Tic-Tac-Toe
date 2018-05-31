import React from 'react';

class NewGamePanel extends React.Component {
  public render() {
    return (
      <div className="card">
        <div className="card-header">
          <h5>Create New Game</h5>
        </div>
        <div className="card-body">
          <button className="btn btn-primary btn-block">Create New Game</button>
        </div>
        
      </div>
    );
  }
}

export default NewGamePanel;