import React from 'react';
import axios from 'axios';
import { DispatchProp, connect } from 'react-redux';

import Password from '../../ui-components/Password';
import { 
  IWelcomeAction, 
  UPDATE_WELCOME_MODE, UPDATE_ERROR_MESSAGE 
} from '../../../actions/IWelcomeAction';
import {
  IPlayersAction,
  UPDATE_PLAYER_NAMES
} from '../../../actions/IPlayersAction';
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
  
  /**
   * Close Welcome Panel
   * - Tell "Players" Panel to update its "this player";
   * - Hide Welcome Panel.
   * @argument thisPlayerName the name of the player who has this instance
   * of the web app. The string is used to udpate "this player"
   */
  private closeWelcomePanel(thisPlayerName: string) {
    
    axios.get<TicTacToe.IPlayersResponse<string>>("/players").then((response) => {
      
      var players = response.data.players;
      var otherPlayerName;
      
      if (players.length >= 2) {
        var playerA = players[0];
        var playerB = players[1];
        
        if (playerA) {
          if (playerA.name != thisPlayerName) {
            otherPlayerName = playerA.name;
          }
        }
        
        if (playerB) {
          if (playerB.name != thisPlayerName) {
            otherPlayerName = playerB.name;
          }
        }
        
        this.props.dispatch<IPlayersAction>({
          type: UPDATE_PLAYER_NAMES,
          payload: {
            thisPlayerName: thisPlayerName,
            otherPlayerName: otherPlayerName
          }
        });
      }
      
    });
    
    // Hide the welcome panel
    this.props.dispatch<IWelcomeAction>({ 
      type: UPDATE_WELCOME_MODE, 
      payload: "hidden" 
    });
  }

  /**
   * Handler for onChange of invitation code's input field.
   */
  invitationCodeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ invitationCode: e.target.value });
  }

  /**
   * Handler for onChange of player name's input field.
   */
  playerNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ playerName: e.target.value });
  }

  /**
   * Change from "join" mode to "create" mode. Called by the "Create?" button.
   */
  switchToCreateGame = () => {
    this.props.dispatch<IWelcomeAction>({ type: UPDATE_WELCOME_MODE, payload: "create" });
  }
  
  /**
   * Change from "create" mode to "join" mode. Called by the "Create?" button.
   */
  switchToJoinGame = () => {
    this.props.dispatch<IWelcomeAction>({ type: UPDATE_WELCOME_MODE, payload: "join" });
  }

  /**
   * Join a game session. Called by the "Join!" button.
   */
  joinGame = () => {
    const { playerName, invitationCode } = this.state;

    var joinGameQuest: TicTacToe.ICreateGameRequest = {
      name: playerName,
      invitationCode: invitationCode
    };
    
    // this.recordPlayerName(playerName);

    axios.post<TicTacToe.ICreateGameResponse>("/join_game", joinGameQuest)
      .then((response) => {
        var data = response.data;
        if (data.success) {
          
          this.closeWelcomePanel(playerName);
          
        } else if (data.message) {
          
          this.props.dispatch<IWelcomeAction>({ 
            type: UPDATE_ERROR_MESSAGE, 
            payload: data.message 
          });
        }
      });
  }

  /**
   * Create a new game session. Called by the "Create!" button.
   */
  createGame = () => {

    const { playerName, invitationCode } = this.state;

    var createGameRequest: TicTacToe.ICreateGameRequest = {
      name: playerName,
      invitationCode: invitationCode
    };

    axios.post<TicTacToe.ICreateGameResponse>("/create_game", createGameRequest)
      .then((response) => {
        var data = response.data;
        if (data.success) {
          
          this.closeWelcomePanel(playerName);
          
        } else if (data.message) {
          
          this.props.dispatch<IWelcomeAction>({ 
            type: UPDATE_ERROR_MESSAGE, 
            payload: data.message 
          });
          
        }
      });
  }

  public render() {

    const { mode, errorMessage } = this.props;
    
    // Hidden mode, return null to get rid of the welcome panel.
    
    if (mode == "hidden") {
      return null;
    }
    
    // Actions to perform on the Welcome Panel
    // "join" mode: 
    //  "Create!": create a new game;
    //  "Join?": switch to "join" mode;
    // "create" mode: 
    //  "Join!": join game; 
    //  "Create?": switch to "create" mode;
    
    var actions = <div></div>;

    if (mode == "create") {
      actions = (
        <div>
          <button
            className="btn btn-outline-light btn-block"
            onClick={this.createGame}>Create!</button>
          <button
            className="btn btn-outline-secondary btn-block"
            onClick={this.switchToJoinGame}>Join?</button>
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
    
    // Display the error message, if there is one.

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
          
            {/* Error message */}
          
            {error}
            
            {/* User name*/}
            
            <div className="row mt-2">
              <div className="col">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    className="form-control" type="text"
                    placeholder="Name"
                    onChange={this.playerNameChanged} 
                    value={this.state.playerName} />
                </div>
              </div>
            </div>
            
            {/* Password */}

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
            
            {/* Actions */}

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

/**
 * Map state managed by redux to props
 * @param state the total state managed by redux
 * @param ownProps the props exposed to other components.
 */
function mapStateToProps(state: ITotalState, ownProps: {}): IWelcomePanelProps {
  const { mode, errorMessage } = state.welcome;
  return { mode: mode, errorMessage: errorMessage };
}

export default connect(mapStateToProps)(WelcomePanel);
