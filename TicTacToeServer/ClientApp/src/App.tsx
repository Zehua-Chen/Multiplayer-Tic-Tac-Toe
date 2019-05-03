import React, { Component } from 'react';
// import axios from "axios";
import { HubConnectionBuilder, HubConnection } from "@aspnet/signalr";

interface IAppState {
  body: string
}

class App extends Component<{}, IAppState> {
  
  connection: HubConnection | undefined;
  
  constructor(props: any) {
    super(props);
    
    this.state = {
      body: ""
    };
  }
  
  componentDidMount() {
    this.connection = new HubConnectionBuilder()
      .withUrl("/game")
      .build();
      
      this.connection.start().catch((err) => {
      this.setState({ body: "error" });
    });
      
    this.connection.on("received", () => {
      this.setState({ body: "message received" });
    })
  }
  
  onClicked = () => {
    this.connection!.send("broadCast");
  }
  
  render() {
    return (
      <div>
        {this.state.body}
        <button onClick={this.onClicked}>Click Me!</button>
      </div>
    );
  }
}

export default App;
