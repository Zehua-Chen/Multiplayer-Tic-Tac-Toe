import React from 'react';

class PlayersList extends React.Component {
  
  render() {
    
    const { children } = this.props;
    
    return (
      <ul className="list-group list-group-flush">
        {children}
      </ul>
    );
  }
}

export default PlayersList;