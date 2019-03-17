import React from 'react';
import withStyles from 'react-jss';

const style = {
  unset: {
    height: 50,
    width: 50,
    /* Color copied from http://getbootstrap.com/docs/4.1/getting-started/theming/#color */
    background: "#e5e5e5",
    border: "transparent",
    borderRadius: 25,
    transition: [
      ["border-radius", "0.2s", "ease-in-out"],
      ["background", "0.2s", "ease-in-out"],
    ],
    
    "&:hover": {
      background: "#343a40",
      borderRadius: 5,
    },
    
    "&:focus": {
      outline: "none !important",
    },
  },
  
  set: {
    height: 50,
    width: 50,
    border: "transparent",
    borderRadius: 5,
    color: "white",
    
    "&:focus": {
      outline: "none !important",
    }
  }

};

class Square extends React.Component {
  
  render() {
    
    const { player, classes, ...others } = this.props;
    
    var className = classes.unset;
    
    if (player) {
      if (player == "this") {
        className = `${classes.set} bg-primary`;
      } else if (player == "other") {
        className = `${classes.set} bg-danger`;
      }
    }
    
    return (
      <button 
        className={className} 
        {...others}></button>
    );
    
  }
}

export default withStyles(style)(Square);