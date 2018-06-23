import React from 'react';
import axios from 'axios';
import { connect, DispatchProp } from 'react-redux';
import { ICreateGameAction, CREATE_SUCCESSFUL } from '../../../actions';

export interface ICreateGamePageState {
  playerName: string;
  invitationCode: string;
}

/**
 * Page used to create a new game. 
 * 
 * Needs the following from the user:
 * - His or her player name;
 * - An invitation code used by the second player to join the game;
 */
export class CreateGame extends React.Component<DispatchProp, ICreateGamePageState> {
  
  constructor(props: DispatchProp) {
    super(props);
    
    this.state = { playerName: "", invitationCode: "" };
  }
  
  /**
   * Called by the "Create Game Button" to create a game.
   */
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
  
  /**
   * Update the "playerName" property.
   */
  playerNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ playerName: e.target.value });
  }
  
  /**
   * Update the invitation code property.
   */
  invitationCodeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ invitationCode: e.target.value });
  }
  
  render() {
    return (
      <div className="container">
      
        <div className="row mt-2">
          <div className="col">
            <div className="form-group">
              <label>Your Name</label>
              <input 
                className="form-control" type="text"
                onChange={this.playerNameChanged} value={this.state.playerName} />
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>Invitation Code</label>
              <input 
                className="form-control" type="text"
                onChange={this.invitationCodeChanged} value={this.state.invitationCode} />
            </div>
          </div>
        </div>
        
        <div className="row mb-2">
          <div className="col">
            <button className="btn btn-primary btn-block" onClick={this.createGame}>Create!</button>
          </div>
        </div>
      </div>
    );
  }
}

// function mapStatetoProps(state: {}, ownProps: {}): {} {
//   return {};
// }

export default connect()(CreateGame);
