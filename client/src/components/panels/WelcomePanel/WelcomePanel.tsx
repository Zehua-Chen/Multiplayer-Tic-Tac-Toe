import React from 'react';

type WelcomePanelMode = "create" | "join";

export interface IWelcomePanelProps {
  mode?: WelcomePanelMode;
}

class WelcomePanel extends React.Component<IWelcomePanelProps> {
  public render() {
    
    var cardContent = <button className="btn btn-primary btn-block">Create New Game</button>;
    
    if (this.props.mode) {
      switch(this.props.mode) {
        case "join":
          cardContent = <button className="btn btn-primary btn-block">Create New Game</button>;
          break;
      }
    }
    
    return (
      <div className="card">
        <div className="card-header">
          <h5>Welcome</h5>
        </div>
        <div className="card-body">
          {cardContent}
        </div>
        
      </div>
    );
  }
}

export default WelcomePanel;