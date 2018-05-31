import React from 'react';

class ScorePanel extends React.Component {
  render() {
    return (

      <div className="card">

        <div className="card-header">
          <h5>Scores</h5>
        </div>

        <ul className="list-group list-group-flush">
          <div className="list-group-item">Player 1</div>
          <div className="list-group-item">Player 2</div>
        </ul>

      </div>
    );
  }
}

export default ScorePanel;