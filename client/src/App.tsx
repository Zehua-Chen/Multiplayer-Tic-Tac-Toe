import * as React from 'react';

// import logo from './logo.svg';

import StatusBar from './components/StatusBar';

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <StatusBar />
      </div>
    );
  }
}

export default App;
