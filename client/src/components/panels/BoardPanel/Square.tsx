import * as React from 'react';
import injectSheet, { WithClasses } from 'react-jss';

type Player = "this" | "other";

interface ISquareProps extends React.HTMLProps<HTMLButtonElement> {
  player?: Player;
}

/* Styles */
const style = {
  unsetSquare: {
    height: "50px",
    width: "50px",
    // Color copied from http://getbootstrap.com/docs/4.1/getting-started/theming/#color
    background: "#e5e5e5",
    border: "transparent",
    borderRadius: "25px",
    transition: [
      ["border-radius", "0.2s", "ease-in-out"],
      ["background", "0.2s", "ease-in-out"],
    ],
    
    "&:hover": {
      // Color copied from http://getbootstrap.com/docs/4.1/getting-started/theming/#color
      background: "#343a40",
      borderRadius: "5px",
    },
    
    "&:focus": {
      outline: [["none"], "!important"]
    }
  },
  
  setSquare: {
    height: "50px",
    width: "50px",
    border: "transparent",
    borderRadius: "5px",
    color: "white",
    
    "&:focus": {
      outline: [["none"], "!important"]
    }
  }
}

type ClassKeys = "unsetSquare" | "setSquare";

class Square extends React.Component<ISquareProps & WithClasses<ClassKeys>> {
  
  render() {
    
    const { player, classes, ...others } = this.props;
    var className = classes.unsetSquare;
    
    if (player) {
      if (player == "this") {
        className = `${classes.setSquare} bg-primary`;
      } else if (player == "other") {
        className = `${classes.setSquare} bg-danger`;
      } 
    } 
    
    return (
      <button 
        className={className} 
        {...others}></button>
    );
    
  }
}

export default injectSheet(style)<ISquareProps, ClassKeys>(Square);