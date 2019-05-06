import React, { Component } from "react";

export interface ICreateGameInfo {
  size: number,
  userName: string,
  invitationCode: string
}

export interface ICreateGameFormProps {
  onSubmit: (info: ICreateGameInfo) => void
}

class CreateGameForm extends Component<ICreateGameFormProps> {
  
}

export default CreateGameForm;