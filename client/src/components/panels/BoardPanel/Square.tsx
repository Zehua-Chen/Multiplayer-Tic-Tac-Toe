import * as React from 'react';

import './Square.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square bg-light">X</button>
    );
  }
}

export default Square;