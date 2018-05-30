import React from 'react';

class ScorePanel extends React.Component {
  render() {
    return (
      <div className="col-md-4">
      
        <div className="bg-light rounded">
        
          <div className="text-center">
            <h5>Scores</h5>
          </div>
          
          <div className="list-group">
            <div className="list-group-item">Player 1</div>
            <div className="list-group-item">Player 2</div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default ScorePanel;