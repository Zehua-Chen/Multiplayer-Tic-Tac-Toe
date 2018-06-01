import * as React from 'react';

import './Square.css';

type Player = "me" | "enemy";

interface ISquareProps {
  player?: Player;
}

class Square extends React.Component<ISquareProps> {
  
  mouseDown = () => {
    console.log("Mouse down");
  }
  
  mouseUp = () => {
    console.log("Mouse up!");
  }
  
  render() {
    
    const { player } = this.props;
    var className = "unset-square";
    
    if (player) {
      if (player == "me") {
        className = "square bg-primary";
      } else if (player == "enemy") {
        className = "square bg-danger";
      } 
    } 
    
    return (
      <button className={className} onMouseDown={this.mouseDown}>X</button>
    );
    
  }
}

export default Square;