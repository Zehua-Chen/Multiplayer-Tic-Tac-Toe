import { Action } from 'redux';

/**
 * Type of the payload when dispatching UPDATE_PLAYER_NAMES
 */
export interface IPlayerNames {
    /**
     * name of this player
     */
    thisPlayerName?: string;
    /**
     * name of the other player
     */
    otherPlayerName?: string;
}

/**
 * The action to send to edit IPlayersState
 */
export interface IPlayersAction extends Action<string> {
    /**
     * string:
     * - UPDATE_OTHER_PLAYER_NAME: payload should be the name of the other player
     * - UPDATE_THIS_PLAYER_NAME: payload should be the name of this player
     * - UPDATE_MOVING_PLAYER_NAME: paylaod should be the plaeyr that is taking a move
     * - ADD_PLAYRE: payload should be the name of the player to add to IPlayersState
     * 
     * IPlayerNames:
     * - UPDATE_PLAYER_NAMES: payload should be IPlayerNames
     */
    payload?: string | IPlayerNames;
}

/**
 * Update the name of the other player.
 */
export const UPDATE_OTHER_PLAYER_NAME = "UPDATE_OTHER_PLAYER_NAME";
/**
 * Update the name of this player.
 */
export const UPDATE_THIS_PLAYER_NAME = "UPDATE_THIS_PLAYER_NAME";
/**
 * Update the players' names (using a dictionary)
 */
export const UPDATE_PLAYER_NAMES = "UPDATE_PLAYER_NAMES";
/**
 * Update the name of the player that is moving.
 */
export const UPDATE_MOVING_PLAYER_NAME = "UPDATE_MOVING_PLAYER_NAME";

/**
 * Add a new player's name
 */
export const ADD_PLAYER_NAME = "ADD_PLAYER";
