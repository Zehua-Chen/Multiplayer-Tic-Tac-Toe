import React from 'react';
import axios from 'axios';
import { DispatchProp, connect } from 'react-redux';

import Password from '../../ui-components/Password';

import {
  ICreateGameAction,
  CREATE_SUCCESSFUL
} from '../../../actions/ICreateGameAction';

type WelcomePanelMode = "create" | "join";

interface IWelcomePanelProps {
}

export interface IWelcomePanelState {
  playerName: string;
  invitationCode: string;
  mode: WelcomePanelMode;
}

class WelcomePanel extends React.Component<IWelcomePanelProps & DispatchProp, IWelcomePanelState> {

  constructor(props: IWelcomePanelProps & DispatchProp) {
    super(props);

    this.state = {
      playerName: "",
      invitationCode: "",
      mode: "join"
    }
  }

  invitationCodeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ invitationCode: e.target.value });
  }

  playerNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ playerName: e.target.value });
  }
  
  switchToCreateGame = () => {
    this.setState({ mode: "create" });
  }
  switchToJoinGame = () => {
    this.setState({ mode: "join" });
  }

  joinGame = () => {

  }

  createGame = () => {

    const { playerName, invitationCode } = this.state;

    var createGameRequest: TicTacToe.ICreateGameRequest = {
      name: playerName,
      passcode: invitationCode
    };

    console.log(`Game = ${createGameRequest}`);

    axios.post<TicTacToe.ICreateGameResponse>("/create_game", createGameRequest)
      .then((response) => {
        var data = response.data;
        if (data.success) {
          //TODO: Dispatch success message
          console.log("Create Successful");
          this.props.dispatch<ICreateGameAction>({ type: CREATE_SUCCESSFUL });
        } else {
          alert(`Create Game Failed\nReason: ${data.message}`);
        }
      });
  }

  public render() {

    var actions = <div></div>;
    
    if (this.state.mode == "create") {
      actions = (
        <div>
          <button 
            className="btn btn-outline-light btn-block" 
            onClick={this.createGame}>Create!</button>
          <button 
            className="btn btn-outline-secondary btn-block"
            onClick={this.switchToJoinGame}>Join Game?</button>
        </div>
      );
    } else if (this.state.mode == "join") {
      actions = (
        <div>
          <button 
            className="btn btn-outline-light btn-block"
            onClick={this.joinGame}>Join Game!</button>
          <button 
            className="btn btn-outline-secondary btn-block"
            onClick={this.switchToCreateGame}>Create?</button>
        </div>
      );
    }
    

    return (
      <div className="card bg-dark text-white">
        <div className="card-header">
          <h5>Welcome</h5>
        </div>
        <div className="card-body">
          <div className="container">

            <div className="row mt-2">
              <div className="col">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    className="form-control" type="text"
                    placeholder="Name"
                    onChange={this.playerNameChanged} value={this.state.playerName} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>Invitation Code</label>
                  <Password 
                    className="form-control"
                    placeholder="Invitation Code"
                    onChange={this.invitationCodeChanged} value={this.state.invitationCode}/>
                </div>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col">
                {actions}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: {}, ownProps: IWelcomePanelProps): {} {
  return {};
}

export default connect(mapStateToProps)(WelcomePanel);
