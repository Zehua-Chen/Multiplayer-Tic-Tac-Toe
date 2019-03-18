import React, { Component } from "react";

/**
 * Props for PlayersListItem
 */
interface IPlayersListItemProps {
  /**
   * Name of the player. If undefined, PlayerListItem will display "Empty"
   *
   * Default is "undefined"
   */
  playerName?: string;

  /**
   * If the player is hostile to the player playing on THIS instance of the
   * client. If hostile, the list item is red, otherwise, blue.
   *
   * Default is "false"
   */
  hostile?: boolean;

  /**
   * If the player is making a move. If moving, there will be a dark badge on
   * the left of the list item.
   *
   * Default is "false"
   */
  moving?: boolean;
}

declare class PlayerListItem extends Component<IPlayersListItemProps> {}

export default PlayerListItem;
