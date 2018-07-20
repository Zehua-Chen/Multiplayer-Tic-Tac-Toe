import * as React from 'react';

import * as styles from './Square.css';

type Player = "this" | "other";

interface ISquareProps extends React.HTMLProps<HTMLButtonElement> {
  player?: Player;
}

class Square extends React.Component<ISquareProps> {
  
  render() {
    
    const { player, ...others } = this.props;
    
    var className = styles.unsetSquare;
    
    if (player) {
      if (player == "this") {
        className = `${styles.setSquare} bg-primary`;
      } else if (player == "other") {
        className = `${styles.setSquare} bg-danger`;
      }
    }
    
    return (
      <button 
        className={className} 
        {...others}></button>
    );
    
  }
}

export default Square;