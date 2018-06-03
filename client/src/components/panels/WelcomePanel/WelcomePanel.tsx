import React from 'react';

import { DispatchProp, connect } from 'react-redux';
import { CreateGamePage } from './CreateGamePage';

type WelcomePanelMode = "create" | "join";

export interface IWelcomePanelProps {
  mode?: WelcomePanelMode;
}

class WelcomePanel extends React.Component<IWelcomePanelProps & DispatchProp> {
  
  public render() {

    // var cardContent = <button className="btn btn-primary btn-block">Create New Game</button>;

    // if (this.props.mode) {
    //   switch(this.props.mode) {
    //     case "join":
    //       cardContent = <button className="btn btn-primary btn-block">Create New Game</button>;
    //       break;
    //   }
    // }

    return (
      <div className="card">
        <div className="card-header">
          <h5>Welcome</h5>
        </div>
        <CreateGamePage />

      </div>
    );
  }
}

function mapStateToProps(state: {}, ownProps: {}): IWelcomePanelProps {
  return {};
}

export default connect(mapStateToProps)(WelcomePanel);
