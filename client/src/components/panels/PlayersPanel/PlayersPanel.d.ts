import React from "react";

/**
 * Props used with connect(mapStateToProps)(Component)
 * to pass information from redux-managed state to the component.
 *
 * THIS PROP IS NOT AVAILABLE IN OTHER COMPONENTS
 */
interface IPlayersPanelProps {
  // firstPlayerName?: string;
  // secondPlayerName?: string;
  // movingPlayerName?: string;
  // connected: boolean;
}

declare class PlayersPanel extends React.Component<IPlayersPanelProps> {}

export default PlayersPanel;
