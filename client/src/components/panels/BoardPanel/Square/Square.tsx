import * as React from 'react';

import * as styles from './Square.css';

type Player = "this" | "other";

interface ISquareProps extends React.HTMLProps<HTMLButtonElement> {
  player?: Player;
}

class Square extends React.Component<ISquareProps> {
  
  render() {
    
    const { player, ...others } = this.props;
    
    var className = styles.unset;
    
    if (player) {
      if (player == "this") {
        className = `${styles.set} bg-primary`;
      } else if (player == "other") {
        className = `${styles.set} bg-danger`;
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