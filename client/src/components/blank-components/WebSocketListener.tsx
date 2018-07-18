import React from 'react';
import { connect, DispatchProp } from 'react-redux';

import socket from '../../network';

import { 
  IGameInfoAction,
  UPDATE_CONNECTION_STATUS, UPDATE_PROGRESS, UPDATE_VIEWERS, UPDATE_WINNER  
} from '../../actions/IGameInfoAction';
import {
  IPlayersAction,
  ADD_PLAYER_NAME,
  UPDATE_MOVING_PLAYER_NAME
} from '../../actions/IPlayersAction';
import { IBoardAction, UPDATE_BOARD_AT } from '../../actions/IBoardAction';


class WebSocketListener extends React.Component<DispatchProp> {

  /**
   * Rebuild connection between
   */
  componentDidMount() {
    // console.log("\"WebSocketListener\" will mount!");
    this.setupWebSocket();
  }
  
  componentWillUnmount() {
    // console.log("\"WebSocketListener\" will unmount!");
    
    socket.emit("user-unavailable");
  }

  shouldComponentUpdate(nextProps: {}, nextState: {}) {
    return false;
  }

  render() {
    return null;
  }
  
  setupWebSocket() {
    socket.on("update_user#", (data: TicTacToe.IUpdateUserAmount) => {
      this.props.dispatch<IGameInfoAction>({ type: UPDATE_VIEWERS, payload: data });
    });

    socket.on("update_progress", (data: TicTacToe.IUpdateProgressBroadcast) => {
      var { remaining, total } = data;
      var progress = (1 - remaining / total) * 100;
      this.props.dispatch<IGameInfoAction>({ type: UPDATE_PROGRESS, payload: progress});
    });
    
    socket.on("update_moving", (data: TicTacToe.IUpdateMovingBroadcast) => {
      this.props.dispatch<IPlayersAction>({
        type: UPDATE_MOVING_PLAYER_NAME,
        payload: data.name
      });
    });
    
    socket.on("new_player", (data: TicTacToe.IPlayer) => {
      this.props.dispatch<IPlayersAction>({ type: ADD_PLAYER_NAME, payload: data.name });
    })
    
    socket.on("new_move", (data: TicTacToe.INewMoveBroadcast) => {
      
      console.log("New move has been made");
      console.log(data);
      
      this.props.dispatch<IBoardAction>({
        type: UPDATE_BOARD_AT,
        payload: {
          location: data.location,
          name: data.name
        }
      });
      
    });
    
    socket.on("found_winner", (winner: TicTacToe.IFoundWinnerBroadcast) => {
      this.props.dispatch<IGameInfoAction>({
        type: UPDATE_WINNER,
        payload: winner.name
      });
    });
    
    socket.on("connect", () => {
      this.props.dispatch<IGameInfoAction>({ type: UPDATE_CONNECTION_STATUS, payload: true });
    });

    socket.on("disconnect", () => {
      this.props.dispatch<IGameInfoAction>({ type: UPDATE_CONNECTION_STATUS, payload: false });
    });
  }
}

export default connect()(WebSocketListener);