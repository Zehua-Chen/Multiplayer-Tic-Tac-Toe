import React from 'react';

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
export class CreateGamePage extends React.Component<{}, ICreateGamePageState> {
  
  constructor(props: {}) {
    super(props);
    
    this.state = { playerName: "", invitationCode: "" };
  }
  
  /**
   * Called by the "Create Game Button" to create a game.
   */
  createGame = () => {
    console.log("Create game");
    console.log(this.state);
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