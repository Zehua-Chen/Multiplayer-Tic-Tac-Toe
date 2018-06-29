import React from 'react';
import axios from 'axios';
import { DispatchProp, connect } from 'react-redux';

import Password from '../../ui-components/Password';
import { IWelcomeAction, UPDATE_WELCOME_MODE, UPDATE_ERROR_MESSAGE } from '../../../actions/IWelcomeAction';
import { ITotalState } from '../../../states';

interface IWelcomePanelProps {
  mode: "create" | "join" | "hidden";
  errorMessage?: string;
}

export interface IWelcomePanelState {
  playerName: string;
  invitationCode: string;
}

class WelcomePanel extends React.Component<IWelcomePanelProps & DispatchProp, IWelcomePanelState> {

  constructor(props: IWelcomePanelProps & DispatchProp) {
    super(props);

    this.state = {
      playerName: "",
      invitationCode: "",
    }
  }

  invitationCodeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ invitationCode: e.target.value });
  }

  playerNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ playerName: e.target.value });
  }

  switchToCreateGame = () => {
    this.props.dispatch<IWelcomeAction>({ type: UPDATE_WELCOME_MODE, payload: "create" });
  }
  switchToJoinGame = () => {
    this.props.dispatch<IWelcomeAction>({ type: UPDATE_WELCOME_MODE, payload: "join" });
  }

  joinGame = () => {
    const { playerName, invitationCode } = this.state;

    var joinGameQuest: TicTacToe.ICreateGameRequest = {
      name: playerName,
      invitationCode: invitationCode
    };

    axios.post<TicTacToe.ICreateGameResponse>("/join_game", joinGameQuest)
      .then((response) => {
        var data = response.data;
        if (data.success) {
          //TODO: Dispatch success message
          this.props.dispatch<IWelcomeAction>({ type: UPDATE_WELCOME_MODE, payload: "hidden" });
        } else if (data.message) {
          this.props.dispatch<IWelcomeAction>({ type: UPDATE_ERROR_MESSAGE, payload: data.message });
        }
      });
  }

  createGame = () => {

    const { playerName, invitationCode } = this.state;

    var createGameRequest: TicTacToe.ICreateGameRequest = {
      name: playerName,
      invitationCode: invitationCode
    };

    console.log(`Game = ${createGameRequest}`);

    axios.post<TicTacToe.ICreateGameResponse>("/create_game", createGameRequest)
      .then((response) => {
        var data = response.data;
        if (data.success) {
          //TODO: Dispatch success message
          this.props.dispatch<IWelcomeAction>({ type: UPDATE_WELCOME_MODE, payload: "hidden" });
        } else if (data.message) {
          this.props.dispatch<IWelcomeAction>({ type: UPDATE_ERROR_MESSAGE, payload: data.message });
        }
      });
  }

  public render() {

    const { mode, errorMessage } = this.props;
    
    if (mode == "hidden") {
      return null;
    }
    
    var actions = <div></div>;

    if (mode == "create") {
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
    } else if (mode == "join") {
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
    
    // Display error message

    var error = null;
    if (errorMessage) {
      error = (
        <div className="row mt-2">
          <div className="col">
            <div className="alert alert-danger">
              {errorMessage}
            </div>
          </div>
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

            {error}

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
                    onChange={this.invitationCodeChanged} value={this.state.invitationCode} />
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

function mapStateToProps(state: ITotalState, ownProps: {}): IWelcomePanelProps {
  const { mode, errorMessage } = state.welcome;
  return { mode: mode, errorMessage: errorMessage };
}

export default connect(mapStateToProps)(WelcomePanel);
