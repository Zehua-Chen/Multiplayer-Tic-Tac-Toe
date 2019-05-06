import React, { Component } from "react";

export interface IJoinGameInfo {
  userName: string,
  invitationCode: string
}

export interface IJoinGameFormProps {
  onSubmit: (info: ICreateGameInfo) => void
}

class JoinGameForm extends Component<IJoinGameFormProps> {
  
}

export default JoinGameForm;