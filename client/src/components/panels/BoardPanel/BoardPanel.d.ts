import React from "react";

interface IBoardProps {
  board: string[][];
  invitationCode: string;
  password: string;
  thisPlayerName?: string;
  otherPlayerName?: string;
}

declare class BoardPanel extends React.Component<IBoardProps> {}

export default BoardPanel;
